import IconStar from "../icons/star";
import IconStarHalf from "../icons/star-half";
import IconStarOutline from "../icons/star-outline";

import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  className?: string;
}

export default function Rating({ rating, className }: RatingProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(5)].map((_, index) => {
        const ratingStar = rating / 2;

        if (Math.floor(ratingStar) > index) {
          return (
            <IconStar key={index} className="fill-primary stroke-primary" />
          );
        }
        if (ratingStar > index && ratingStar < index + 1) {
          return (
            <IconStarHalf key={index} className="fill-primary stroke-primary" />
          );
        }

        return (
          <IconStarOutline
            key={index}
            className="fill-primary stroke-primary"
          />
        );
      })}
      <span className="ml-3 text-sm text-primary">{rating}</span>
    </div>
  );
}
