import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcherSelect from "./locale-switcher-select";
import { locales } from "@/config";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label="">
      {locales.map((cur) => (
        <option key={cur} value={cur} className="">
          {cur.toUpperCase()}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
