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
    <label className=" m-1 font-Title font-bold absolute -bottom-20 z-20 -left-4 px-2 bg-green-100 flex flex-col">
      <select
        className="inline-flex appearance-none w-[70px] p-1 hover:text-primary"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
