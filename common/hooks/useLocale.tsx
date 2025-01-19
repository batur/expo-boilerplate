import { createContext, useContext, useEffect } from "react";
import { getLocales } from "expo-localization";
import { I18n, Scope, TranslateOptions } from "i18n-js";

import { localeStore } from "@common/stores";

type LocaleContextType = {
  t: <T = string>(scope: Scope, options?: TranslateOptions) => string | T;
  languageCode: string;
  localeDetails: {};
} | null;

const LocaleContext = createContext<LocaleContextType>(null);

type LocaleProviderProps = {
  children: React.ReactNode;
};

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const i18n = new I18n({
    en: { welcome: "Hello" },
    ja: { welcome: "こんにちは" },
  });

  const { setLocales, setSelectedLocale, getSelectedLocale } = localeStore();

  useEffect(() => {
    setLocales(getLocales());
    setSelectedLocale(getLocales()[0].languageCode || "en");
    i18n.locale = getLocales()[0].languageCode || "en";
  }, []);

  return (
    <LocaleContext.Provider
      value={{ t: i18n.t, languageCode: i18n.locale, localeDetails: getSelectedLocale() }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const store = useContext(LocaleContext);
  if (!store) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return store;
};

export const useStoreContext = () => {};
