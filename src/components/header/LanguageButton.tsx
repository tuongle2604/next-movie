"use client";
import IconLanguage from "@/components/icons/language";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { regions, defaultLocale } from "@/lib/regions";
import {
  useRouter,
  usePathname,
  useParams,
  useSearchParams,
} from "next/navigation";

export default function LanguageButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useParams();
  const searchParams = useSearchParams();

  function onSelectLanguage(code: string) {
    const currentPath = pathname.replace(`/${lang}`, "");

    if (code === lang) {
      return;
    }
    // if (code === defaultLocale) {
    //   router.push(`${currentPath}?${searchParams.toString()}`);
    //   return;
    // }
    router.push(`/${code}/${currentPath}?${searchParams.toString()}`);
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size="icon"
          className="h-9 w-9 "
          aria-label="Select Language"
        >
          <IconLanguage />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-secondary">
        {regions.map((region) => (
          <DropdownMenuItem
            key={region.code}
            className="cursor-pointer dark:hover:bg-inherit"
            onClick={() => onSelectLanguage(region.code)}
          >
            {region.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
