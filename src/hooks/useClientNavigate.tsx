"use client";
import { useRouter, usePathname, useParams } from "next/navigation";
import { isLinkHasLocale } from "@/lib/utils";

export const useClientNavigate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useParams();

  function navigateTo(href: string) {
    if (isLinkHasLocale(href)) {
      return router.push(href);
    }

    if (isLinkHasLocale(pathname)) {
      return router.push(`/${lang}${href}`);
    }

    router.push(href);
  }

  return { navigateTo };
};
