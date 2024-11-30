import Image from "next/image";
import Favicon from "public/favicon.svg";
import { cn } from "@/lib/utils";
import NextLink from "@/components/ui/next-link";

interface LogoProps {
  className: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <NextLink className={cn("flex items-center", className)} href={"/"}>
      <Image
        className="hidden w-8 h-8 pb-1 mr-3 md:block"
        src={Favicon}
        alt="logo"
        width={40}
        height={40}
      />
      <p className="font-bold">Enhance Movies</p>
    </NextLink>
  );
}
