import { iconPaths } from "#/shared/assets/icon_paths";
import Image from "next/image";
import IcAssets from "#/shared/assets/icons/ic_assets.svg";
import { PropsWithChildren } from "react";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-1 flex-row">
      <div className="w-[200px] border-r px-[10px] sticky top-0 bottom-0 bg-white">
        <Image
          className="w-36 object-contain mx-auto my-10"
          src={iconPaths.fmsLogo}
          alt="FMS Logo"
        />
        <menu className="flex flex-col border-t gap-y-1 py-1">
          <ul className="gap-y-1">
            <li className="group p-4 cursor-pointer hover:bg-primary rounded-lg">
              <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                <IcAssets className="fill-primary group-hover:fill-white" />
                Assets
              </span>
            </li>
            <li className="group p-4 cursor-pointer hover:bg-primary rounded-lg">
              <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                <IcAssets
                  className="fill-primary group-hover:fill-white"
                  width={24}
                  height={24}
                />
                <span>Assets</span>
              </span>
            </li>
          </ul>
        </menu>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex h-16 sticky top-0 items-center pl-8 pr-6 border-b bg-white">
          <div className="flex flex-grow font-bold opacity-50">
            Dashboard Overview
          </div>
          <div className="flex gap-x-4">
            <button className="btn btn-primary">Create</button>
            <button className="btn btn-secondary">Export</button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
