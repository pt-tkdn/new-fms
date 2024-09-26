"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "#/shared/components/ui/avatar";
import { Settings, BellDot } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  const name = path.substring(1);

  let title = <span className="font-bold opacity-50">Dashboard Overview</span>;

  if (name.length > 0) {
    const [menu, subMenu] = name.split("/");
    title = (
      <span className="font-bold">
        <span className="opacity-50">
          {menu.charAt(0).toUpperCase() + menu.substring(1)}
          {" > "}
        </span>
        <span className="opacity-100">{subMenu}</span>
      </span>
    );
  }

  return (
    <div className="flex h-16 sticky top-0 z-10 items-center pl-8 pr-6 border-b bg-white">
      <div className="flex flex-grow">{title}</div>
      <div className="flex items-center gap-x-5">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300/90 transition-colors text-slate-500">
          <Settings size={18} />
        </button>

        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300/90 transition-colors text-pink-500">
          <BellDot size={18} />
        </button>

        <button className="flex gap-x-5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start">
            <span className="text-sm font-bold text-slate-800">Josh Shad</span>
            <span className="text-xs font-normal text-slate-700">Admin</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
