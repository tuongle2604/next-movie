import clsx from "clsx";
import { Button } from "@/components/ui/button";

interface ThemeSwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDarkMode?: boolean;
}

export default function ThemeSwitch({
  color = "currentColor",
  isDarkMode = true,
  onClick,
  ...props
}: ThemeSwitchProps) {
  return (
    <Button
      className="group h-9 w-9 "
      size={"icon"}
      variant={"ghost"}
      onClick={onClick}
    >
      <svg
        className="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask className="moon " id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle
            cx="24"
            cy="10"
            r="5"
            fill="black"
            className={clsx(
              "--ease-out-5 transition duration-200",
              isDarkMode && "moon-circle-animate -translate-x-2 delay-200",
            )}
          />
        </mask>

        <circle
          className={clsx(
            "ease-elastic-3 origin-center fill-foreground transition-transform duration-500",
            isDarkMode &&
              "ease-3 duration-250 scale-[1.75] group-hover:fill-accent-foreground",
          )}
          cx="12"
          cy="12"
          r="5"
          mask="url(#moon-mask)"
        />

        <g
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={clsx(
            "ease-elastic-3 origin-center  stroke-foreground transition-transform duration-500 ",
            isDarkMode && "-rotate-[25deg] opacity-0 duration-150",
          )}
        >
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </g>
      </svg>
    </Button>
  );
}
