import Link from "next/link";

interface ItemProps {
  label: string;
  // Icon: React.ReactElement;
  // href: string;
  // children: React.ReactNode
}

export default function Item({ label }: ItemProps) {
  return (
    <Link href="">
      {label}
    </Link>
  )
}