"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import IconHamburger from "@/components/icons/hamburger";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTitle,
  SheetDescription,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useRef, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import SearchButton from "./SearchButton";
import LanguageButton from "./LanguageButton";
import { useTheme } from "next-themes";

export default function Header({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  function toggleNavbar() {
    setOpen((state) => !state);
  }

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <header
      className="box-shadow fixed inset-0 z-50 h-14 w-full border-b bg-inherit px-4 md:h-14"
      ref={ref}
    >
      <div className="m-auto flex h-full max-w-screen-3xl flex-row-reverse items-center md:flex-row md:gap-0">
        <Sheet modal={true}>
          <VisuallyHidden.Root>
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Sidebar</SheetDescription>
          </VisuallyHidden.Root>

          <SheetTrigger className="mr-auto" asChild>
            <Button variant={"ghost"} size={"icon"} className=" h-9 md:hidden">
              <IconHamburger
                width={28}
                height={28}
                className="stroke-foreground"
                onClick={toggleNavbar}
              />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="overflow-scroll border-none md:hidden"
          >
            {children}
          </SheetContent>
        </Sheet>

        <div className="flex w-full items-center md:gap-2">
          <Logo className="mr-auto" />
          <ThemeSwitch isDarkMode={theme === "dark"} onClick={toggleTheme} />
          <LanguageButton />
          <SearchButton />
        </div>
      </div>
    </header>
  );
}
