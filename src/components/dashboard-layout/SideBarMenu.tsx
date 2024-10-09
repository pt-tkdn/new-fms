import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import LogoutButton from "#/modules/user/presentation/LogoutButton";
import { iconPaths } from "#/shared/assets/icon_paths";
import IcAssets from "#/shared/assets/icons/ic_assets.svg";
import IcMonitoring from "#/shared/assets/icons/ic_monitory.svg";
import IcReports from "#/shared/assets/icons/ic_reports.svg";
import IcRoad from "#/shared/assets/icons/ic_road.svg";
import IcSpeedometer from "#/shared/assets/icons/ic_speedometer.svg";
import IcTruckPoint from "#/shared/assets/icons/ic_truckpoint.svg";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "#/shared/components/ui/accordion";

export interface SubMenu {
  name: string;
  routeName: __next_route_internal_types__.RouteImpl<string>;
}

const ASSETS_SUB_MENU: SubMenu[] = [
  {
    routeName: "/assets/gps",
    name: "GPS",
  },
  {
    routeName: "/assets/sim-cards",
    name: "SIM Cards",
  },
  {
    routeName: "/assets/vehicle",
    name: "Vehicle",
  },
  {
    routeName: "/assets/driver",
    name: "Driver",
  },
  {
    routeName: "/assets/ibutton",
    name: "iButton",
  },
];

const CONFIGURATION_SUB_MENU: SubMenu[] = [
  {
    name: "Stops",
    routeName: "/configurations/stops",
  },
  {
    name: "Routes",
    routeName: "/configurations/routes",
  },
  {
    name: "Sub Routes",
    routeName: "/",
  },
  {
    name: "Custom Alerts",
    routeName: "/",
  },
  {
    name: "GPS Command",
    routeName: "/",
  },
];
const OPERATION_SUB_MENU = ["Trip", "Upload Trip", "Deliveries"];
const MONITORING_SUB_MENU = [
  "Live Tracking",
  "Monitoring Schematic",
  "Monitoring Vehicle",
  "Monitoring Router Vehicle",
  "Monitoring Custom Alerts Event",
];
const REPORTS_SUB_MENU = [
  "Report History Vehicle",
  "Report Journey Driver",
  "Report Checkpoint Vehicle",
  "Report Position GPS",
  "Report Geofence",
  "Report Geofence Summary",
  "Report Summary by KM",
];

const SideBarMenu = () => {
  return (
    <aside className="min-w-[240px] sticky top-0 h-screen border-r px-[10px] bg-white overflow-y-auto">
      <Image
        className="w-36 object-contain mx-auto my-10"
        src={iconPaths.fmsLogo}
        alt="FMS Logo"
      />
      <Accordion collapsible asChild type="single">
        <menu className="block border-y ">
          <ul className="space-y-1">
            <Link
              href="/"
              className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between transition-colors"
            >
              <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold text-base">
                <IcSpeedometer className="fill-primary group-hover:fill-white" />
                Overview
              </span>
            </Link>

            <AccordionItem asChild className="border-none" value="assets">
              <li>
                <AccordionTrigger asChild>
                  <div className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
                    <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                      <IcAssets
                        className="fill-primary group-hover:fill-white"
                        width={24}
                        height={24}
                      />
                      <span>Assets</span>
                    </span>
                    <ChevronDown className="group:fill-white transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col px-4 gap-y-2">
                  {ASSETS_SUB_MENU.map((item) => (
                    <Link
                      className="hover:text-primary"
                      href={item.routeName}
                      key={item.name}
                    >
                      {item.name}
                    </Link>
                  ))}
                </AccordionContent>
              </li>
            </AccordionItem>

            <AccordionItem className="border-none" value="configuration">
              <li>
                <AccordionTrigger asChild>
                  <div className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
                    <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                      <IcTruckPoint
                        className="fill-primary group-hover:fill-white"
                        width={24}
                        height={24}
                      />
                      <span>Configuration</span>
                    </span>
                    <ChevronDown className="group:fill-white transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col px-4 gap-y-2">
                  {CONFIGURATION_SUB_MENU.map((item) => (
                    <Link
                      className="hover:text-primary"
                      href={item.routeName}
                      key={item.name}
                    >
                      {item.name}
                    </Link>
                  ))}
                </AccordionContent>
              </li>
            </AccordionItem>

            <AccordionItem asChild value="operation">
              <li>
                <AccordionTrigger asChild>
                  <div className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
                    <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                      <IcRoad
                        className="fill-primary group-hover:fill-white"
                        width={24}
                        height={24}
                      />
                      <span>Operation</span>
                    </span>
                    <ChevronDown className="group:fill-white transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col px-4 gap-y-2">
                  {OPERATION_SUB_MENU.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </AccordionContent>
              </li>
            </AccordionItem>

            <AccordionItem asChild value="monitoring">
              <li>
                <AccordionTrigger asChild>
                  <div className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
                    <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                      <IcMonitoring
                        className="fill-primary group-hover:fill-white"
                        width={24}
                        height={24}
                      />
                      <span>Monitoring</span>
                    </span>
                    <ChevronDown className="group:fill-white transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col px-4 gap-y-2">
                  {MONITORING_SUB_MENU.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </AccordionContent>
              </li>
            </AccordionItem>

            <AccordionItem asChild value="report">
              <li>
                <AccordionTrigger asChild>
                  <div className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
                    <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold">
                      <IcReports
                        className="fill-primary group-hover:fill-white"
                        width={24}
                        height={24}
                      />
                      <span>Reports</span>
                    </span>
                    <ChevronDown className="group:fill-white transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col px-4 gap-y-2">
                  {REPORTS_SUB_MENU.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </AccordionContent>
              </li>
            </AccordionItem>
          </ul>
        </menu>
      </Accordion>

      <LogoutButton />
    </aside>
  );
};

export default SideBarMenu;
