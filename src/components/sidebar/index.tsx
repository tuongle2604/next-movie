import Item from "./item";
import { getGenreList } from "@/features/movies/api/genre";

interface SideBarProps {
  lang: string;
}

export default async function SideBar({ lang }: SideBarProps) {
  const { genres } = await getGenreList(lang);

  const discover = [
    {
      label: "Popular",
      href: "/popular",
    },
    {
      label: "Top Rated",
      href: "/top-rated",
    },
    {
      label: "Upcoming",
      href: "/upcoming",
    },
  ];

  return (
    <div className="text-sm md:text-base">
      <div className="flex flex-col mb-5">
        <p className="mb-2 font-bold">Discover</p>
        {discover.map((item) => (
          <Item key={item.label} label={item.label} href={item.href} />
        ))}
      </div>

      <div className="flex flex-col">
        <p className="mb-2 font-bold">Genres</p>
        {genres?.map((item) => (
          <Item key={item.id} label={item.name} href={`/genre/${item.id}`} />
        ))}
      </div>
    </div>
  );
}
