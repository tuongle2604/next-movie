// import Link from "next/link";
import NextLink from "@/components/ui/next-link";

interface ItemProps {
  label: string;
  href: string;
  // Icon: React.ReactElement;
  // children: React.ReactNode
}

export default function Item({ label, href = "" }: ItemProps) {
  return (
    <NextLink
      href={href}
      className="text-md px-4 py-2 underline-offset-2 hover:underline "
      prefetch={false}
    >
      {label}
    </NextLink>
  );
}
