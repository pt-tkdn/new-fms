import { iconPaths } from "#/shared/assets/icon_paths";
import Image from "next/image";
import IcAssets from "#/shared/assets/icons/ic_assets.svg";
import IcSpeedometer from "#/shared/assets/icons/ic_speedometer.svg";
import IcTruckPoint from "#/shared/assets/icons/ic_truckpoint.svg";
import IcRoad from "#/shared/assets/icons/ic_road.svg";
import IcMonitoring from "#/shared/assets/icons/ic_monitory.svg";
import IcReports from "#/shared/assets/icons/ic_reports.svg";
import { PropsWithChildren } from "react";
import { ChevronDown } from "lucide-react";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <div className="w-[240px] sticky top-0 h-screen border-r px-[10px] bg-white overflow-y-auto">
        <Image
          className="w-36 object-contain mx-auto my-10"
          src={iconPaths.fmsLogo}
          alt="FMS Logo"
        />
        <menu className="border-t">
          <ul className="gap-y-1">
            <li className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
              <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold text-base">
                <IcSpeedometer className="fill-primary group-hover:fill-white" />
                Overview
              </span>
            </li>
            <li className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
              <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                <IcAssets
                  className="fill-primary group-hover:fill-white"
                  width={24}
                  height={24}
                />
                <span>Assets</span>
              </span>
              <ChevronDown className="group:fill-white" />
            </li>

            <li className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
              <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                <IcTruckPoint
                  className="fill-primary group-hover:fill-white"
                  width={24}
                  height={24}
                />
                <span>Configuration</span>
              </span>
              <ChevronDown className="group:fill-white" />
            </li>

            <li className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
              <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                <IcRoad
                  className="fill-primary group-hover:fill-white"
                  width={24}
                  height={24}
                />
                <span>Operation</span>
              </span>
              <ChevronDown className="group:fill-white" />
            </li>

            <li className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
              <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                <IcMonitoring
                  className="fill-primary group-hover:fill-white"
                  width={24}
                  height={24}
                />
                <span>Monitoring</span>
              </span>
              <ChevronDown className="group:fill-white" />
            </li>

            <li className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
              <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                <IcReports
                  className="fill-primary group-hover:fill-white"
                  width={24}
                  height={24}
                />
                <span>Reports</span>
              </span>
              <ChevronDown className="group:fill-white" />
            </li>
          </ul>
        </menu>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex h-16 sticky top-0 z-10 items-center pl-8 pr-6 border-b bg-white">
          <div className="flex flex-grow font-bold opacity-50">
            Dashboard Overview
          </div>
          <div className="flex gap-x-5">
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
