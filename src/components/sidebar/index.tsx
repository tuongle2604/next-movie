import Item from "./item";

export default function SideBar() {
  const discover = [
    {
      icon: "",
      label: "Popular",
      href: "/popular"
    },
    {
      icon: "",
      label: "Top Rated",
      href: "/top-rated"
    },
    {
      icon: "",
      label: "Upcomming",
      href: "/up-comming"
    }
  ];

  const genres = [
    {
      icon: "",
      label: "Action",
      href: "/action"
    },
  ];

  return (
    <div>
      {/* Discover */}
      <div>
        <p>Discover</p>
        {
          discover.map(item => <Item key={item.label} label={item.label} />)
        }
      </div>
      {/* This is a Side bar */}
    </div>
  )
}