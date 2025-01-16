import AsyncStorage from "@react-native-async-storage/async-storage";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BearState {
  bears: number;
  increase: (by: number) => void;
  reset: () => void;
}

const bearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
      reset: () => set({ bears: 0 }),
    }),
    {
      name: "bear-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default bearStore;
