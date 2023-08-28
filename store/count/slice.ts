import createStore from '../createStore';

export interface CountState {
    count: number,
    increase: (number: number) => void,
    decrease: (number: number) => void,
}

const countStore = createStore<CountState>((set) => ({
    count: 0,
    increase: (number) => set((state) => ({ count: state.count + number })),
    decrease: (number) => set((state) => ({ count: state.count - number })),
}), { name: 'count', lasting: ['count'] });

export default countStore
  