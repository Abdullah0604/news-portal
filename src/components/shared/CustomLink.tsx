"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  href: string;
  children: string;
}
const CustomLink = ({ href: path, children }: LinkProps) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link href={path} className={`${pathName === path ? "text-red-500" : ""}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
