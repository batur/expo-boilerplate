// useLocale.js
import { useEffect, useCallback } from "react";

import { I18n, Scope, TranslateOptions } from "i18n-js";
import { getLocales } from "expo-localization";
import { localeStore } from "@common/stores";

import EN from "@common/locales/en.json";
import TR from "@common/locales/tr.json";
import AR from "@common/locales/ar.json";

const i18n = new I18n({
  en: EN,
  tr: TR,
  ar: AR,
});

i18n.defaultLocale = "en";

export default function useLocale() {
  const { setLocales, setSelectedLocale, getSelectedLocale } = localeStore();

  useEffect(() => {
    setLocales(getLocales());
    setSelectedLocale(getLocales()[0].languageCode);
    i18n.locale = getLocales()[0].languageCode || i18n.defaultLocale;
  }, [getLocales]);

  const t: <T = string>(scope: Scope, options?: TranslateOptions) => string | T = useCallback(
    (scope, options) => {
      return i18n.t(scope, options);
    },
    [],
  );

  return {
    languageCode: getSelectedLocale().languageCode,
    localeDetails: getSelectedLocale(),
    textDirection: getLocales()[0].textDirection,
    t,
  };
}
