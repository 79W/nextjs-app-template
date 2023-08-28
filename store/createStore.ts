import { StoreApi, create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log("storage[getItem]:", name, "has been retrieved");
    return (await (window || global).localStorage.getItem(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(
      "storage[setItem]:",
      name,
      "with value",
      value,
      "has been saved"
    );
    await (window || global).localStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log("storage[removeItem]:", name, "has been deleted");
    await (window || global).localStorage.removeItem(name);
  },
};

interface Options {
  name: string;
  lasting?: Array<string> | boolean;
}

type SetState<T> = StoreApi<T>["setState"];
type GetState<T> = StoreApi<T>["getState"];
type InitStore<T> = (set: SetState<T>, get: GetState<T>) => T;

export default function createStore<T = { [key: string]: any }>(
  initStore: InitStore<T>,
  options: Options
) {
  const { name, lasting = true } = options;

  return create<T>()(
    persist(initStore, {
      name: `${name}_storage`,
      storage: createJSONStorage(() => storage),
      partialize: (state: Omit<T, keyof T>) => {
        if (!lasting) return null;
        if (Array.isArray(lasting) && lasting.length > 0) {
          // 不缓存特定的变量
          const result = lasting.reduce((obj, key: string) => {
            const { [key as keyof T]: deleted, ...rest } = obj;
            return rest;
          }, state);
          return { ...result };
        }
        return state;
      },
      version: 1,
    })
  );
}
