import createStore from "../createStore";

export interface CountState {
  yiyan: string;
  changeYiyan: (text: string) => void;
  count: number;
  increase: (number: number) => void;
  decrease: (number: number) => void;
}

const countStore = createStore<CountState>(
  (set) => ({
    yiyan: "",
    changeYiyan: (text) => set((state) => ({ yiyan: text })),
    count: 0,
    increase: (number) => set((state) => ({ count: state.count + number })),
    decrease: (number) => set((state) => ({ count: state.count - number })),
  }),
  { name: "count", lasting: [] }
);

export default countStore;
