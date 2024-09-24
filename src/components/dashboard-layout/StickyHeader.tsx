import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "#/shared/components/ui/avatar";
import { Settings, BellDot } from "lucide-react";

const Header = () => {
  return (
    <div className="flex h-16 sticky top-0 z-10 items-center pl-8 pr-6 border-b bg-white">
      <div className="flex flex-grow font-bold opacity-50">
        Dashboard Overview
      </div>
      <div className="flex items-center gap-x-5">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300/90 transition-colors text-slate-500">
          <Settings size={18} />
        </button>

        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300/90 transition-colors text-pink-500">
          <BellDot size={18} />
        </button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-800">Shad</span>
          <span className="text-xs font-semibold text-slate-700">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
