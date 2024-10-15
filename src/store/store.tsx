import {create, StateCreator} from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import customAsyncStorage from './customAsyncStorage'; // Custom AsyncStorage wrapper

// Define the state type
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
type MyPersist = (
    config: StateCreator<CounterState>,
    options: PersistOptions<CounterState>
  ) => StateCreator<CounterState>;

const useStore = create<CounterState>(
  (persist as MyPersist)(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set(() => ({ count: 0 })),
    }),
    {
      name: 'counter-storage', // Unique name for the storage
      storage: customAsyncStorage, // Use the custom AsyncStorage wrapper
    }
  )
);

export default useStore;
