"use client";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function LocalizedLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) {
  const locale = useLocale();
  return (
    <Link href={`/${locale}${href}`} {...props}>
      {children}
    </Link>
  );
}
