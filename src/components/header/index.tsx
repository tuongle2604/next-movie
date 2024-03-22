"use client"

import IconHamburger from "../icons/hamburger";
import IconLogin from "../icons/login";
import IconSun from "../icons/sun";
import IconMoon from "../icons/moon";
import { Switch } from "../ui/switch";
import SideBar from "../sidebar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {

  function onChangeMode(checked: boolean) {
    console.log(123);
  }

  return (
    <header className="flex items-center h-14 px-4 gap-2 box-shadow">
      {/* <IconHamburger width={25} height={25} color="#b80040" className="mr-auto" /> */}
      <Sheet >
        <SheetTrigger className="mr-auto">
          <IconHamburger width={25} height={25} color="#b80040" className="" />
        </SheetTrigger>
        <SheetContent side="left">
          <SideBar />
        </SheetContent>
      </Sheet>
      
      <IconSun width={20} height={20} color="#b80040" />
      <Switch onCheckedChange={onChangeMode} className="data-[state=checked]:bg-input" />
      <IconMoon width={20} height={20} color="#b80040" />
      <IconLogin width={25} height={25} color="#b80040" />
    </header>
  )
}