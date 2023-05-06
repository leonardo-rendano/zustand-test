import { create } from 'zustand'

type CounterStoreProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const counterStore = create<CounterStoreProps>((set) => ({
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}))