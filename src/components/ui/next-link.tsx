"use client";
import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";
import { usePathname, useParams } from "next/navigation";
import { isLinkHasLocale } from "@/lib/utils";

export type NextLinkProps = {
  children?: React.ReactNode;
} & LinkProps &
  HTMLProps<HTMLAnchorElement>;

export default function NextLink({ children, href, ...props }: NextLinkProps) {
  const { lang } = useParams<{ lang: string }>();
  const pathname = usePathname();

  function formatLink(href: string) {
    if (isLinkHasLocale(href)) return href;
    if (isLinkHasLocale(pathname)) return `/${lang}${href}`;

    return href;
  }

  return (
    <Link href={formatLink(href)} {...props}>
      {children}
    </Link>
  );
}
