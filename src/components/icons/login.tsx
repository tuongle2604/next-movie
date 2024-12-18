import { IconProps } from "@/types/icon";

const IconLogin= ({ color = 'currentColor', ...props }: IconProps) => (
  <svg width="24" height="24" {...props}>
    <path 
      d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 00-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
      fill={color}
    >
    </path>
  </svg>
)

export default IconLogin

