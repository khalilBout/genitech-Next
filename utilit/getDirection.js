export function getDirection(Locale) {
  const rtlLocals = ["ar"];
  return rtlLocals.includes(Locale) ? "rtl" : "ltr";
}
