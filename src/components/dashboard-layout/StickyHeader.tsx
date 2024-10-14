"use client";

import { Settings, BellDot } from "lucide-react";
import { usePathname } from "next/navigation";

import { ProfileHeader } from "#/modules/user/presentation/ProfileHeader/ProfileHeader";

const SUB_MENU_TITLE = {
  "live-tracking": "Live Tracking",
  gps: "GPS",
  ibutton: "iButton",
};

const Header = () => {
  const path = usePathname();

  const name = path.substring(1);

  let title = <span className="font-bold opacity-50">Dashboard Overview</span>;

  if (name.length > 0) {
    const [menu, subMenu] = name.split("/");
    const subMenuTitle =
      subMenu in SUB_MENU_TITLE
        ? SUB_MENU_TITLE[subMenu as keyof typeof SUB_MENU_TITLE]
        : subMenu.charAt(0).toUpperCase() + subMenu.substring(1);

    title = (
      <span className="font-bold">
        <span className="opacity-50">
          {menu.charAt(0).toUpperCase() + menu.substring(1)}
          {" > "}
        </span>
        <span className="opacity-100">{subMenuTitle}</span>
      </span>
    );
  }

  return (
    <header className="flex h-16 sticky top-0 z-10 items-center pl-8 pr-6 border-b bg-white">
      <div className="flex flex-grow">{title}</div>
      <div className="flex items-center gap-x-5">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300/90 transition-colors text-slate-500">
          <Settings size={18} />
        </button>

        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300/90 transition-colors text-pink-500">
          <BellDot size={18} />
        </button>
        <ProfileHeader />
      </div>
    </header>
  );
};

export default Header;
