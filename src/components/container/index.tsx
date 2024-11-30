import clsx from "clsx";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-screen-3xl m-auto p-4 md:p-5", className)}>
      {children}
    </div>
  );
}
