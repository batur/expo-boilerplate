import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { Locale as ExpoLocale } from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Locale extends ExpoLocale {
  isSelect?: boolean;
}

interface LocaleState {
  locales: Locale[];
  selectedLocale: Locale;
  setLocales: (locale: Locale[]) => void;
  setSelectedLocale: (languageCode: string | null) => void;
  getSelectedLocale: () => Locale;
}

const localeStore = create<LocaleState>()(
  persist(
    (set, get) => ({
      locales: [],
      selectedLocale: {} as Locale,
      setLocales: (locales) => set({ locales }),
      setSelectedLocale: (languageCode) =>
        set((state) => ({
          selectedLocale: state.locales.find((locale) => locale.languageCode === languageCode),
        })),
      getSelectedLocale: () => get().selectedLocale,
    }),
    {
      name: "locale-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default localeStore;
