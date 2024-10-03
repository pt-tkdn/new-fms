"use client";

import { logout } from "#/modules/user/application/actions/session";
import { Power } from "lucide-react";

const LogoutButton: React.FC = () => {
  return (
    <button
      onClick={() => logout()}
      className="w-full group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between transition-colors"
    >
      <span className="flex flex-row items-center gap-x-5 group-hover:text-white font-semibold text-base">
        <span className="flex items-center justify-center h-6 w-6 text-white bg-primary group-hover:bg-white group-hover:text-primary rounded-full">
          <Power size={14} />
        </span>
        Logout
      </span>
    </button>
  );
};

export default LogoutButton;
