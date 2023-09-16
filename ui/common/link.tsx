"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
interface Props {
  linkName: string;
}
export function AppLink({ linkName }: Props) {
  const pathname = usePathname();

  const isActive = pathname === linkName;
  return (
    <>
      <Link className={isActive ? "text-blue" : "text-black"} href={linkName}>
        {linkName}
      </Link>
    </>
  );
}
