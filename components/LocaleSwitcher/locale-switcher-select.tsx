"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, ReactNode, useTransition } from "react";
type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};
export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value.toLowerCase();
    startTransition(() => {
      router.replace(`/${nextLocale}`);
      const newPath = pathname.replace(/^\/(en|ar)/, `/${nextLocale}`);
      router.push(newPath);

      router.refresh();
    });
  }

  return (
    <label className="">
      <select
        className="bg-primary/30 hover:bg-primary inline-flex appearance-none min-w-7 min-h-7 rounded-full text-center hover:text-slate-200 font-bold "
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
