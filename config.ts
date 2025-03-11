import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "ar" as const;
export const locales = ["en", "ar"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/serves": "/serves",
  "/contact": "/contact",
  "/pathnames": {
    en: "/pathnames",
    ar: "/arabic",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
