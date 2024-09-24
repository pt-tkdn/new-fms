import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "#/shared/components/ui/accordion";

import IcAssets from "#/shared/assets/icons/ic_assets.svg";
import IcSpeedometer from "#/shared/assets/icons/ic_speedometer.svg";
import IcTruckPoint from "#/shared/assets/icons/ic_truckpoint.svg";
import IcRoad from "#/shared/assets/icons/ic_road.svg";
import IcMonitoring from "#/shared/assets/icons/ic_monitory.svg";
import IcReports from "#/shared/assets/icons/ic_reports.svg";
import { ChevronDown } from "lucide-react";
import { iconPaths } from "#/shared/assets/icon_paths";
import Image from "next/image";

const TEMP_SUB_MENU = ["GPS", "SIM Cards", "Vehicle", "Driver", "iButton"];

const SideBarMenu = () => {
  return (
    <div className="w-[240px] sticky top-0 h-screen border-r px-[10px] bg-white overflow-y-auto">
      <Image
        className="w-36 object-contain mx-auto my-10"
        src={iconPaths.fmsLogo}
        alt="FMS Logo"
      />
      <Accordion collapsible asChild type="single">
        <menu className="border-t">
          <ul className="space-y-1">
            <li className="group p-4 cursor-pointer hover:bg-primary rounded-lg hover:text-white flex flex-row items-center justify-between">
              <span className="flex flex-row gap-x-5 group-hover:text-white font-semibold text-base">
                <IcSpeedometer className="fill-primary group-hover:fill-white" />
                Overview
              </span>
            </li>

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
                <AccordionContent className="flex flex-col px-4">
                  {TEMP_SUB_MENU.map((item) => (
                    <span key={item}>{item}</span>
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
                <AccordionContent className="flex flex-col px-4">
                  {TEMP_SUB_MENU.map((item) => (
                    <span key={item}>{item}</span>
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
                <AccordionContent className="flex flex-col px-4">
                  {TEMP_SUB_MENU.map((item) => (
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
                <AccordionContent className="flex flex-col px-4">
                  {TEMP_SUB_MENU.map((item) => (
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
                      <span>Report</span>
                    </span>
                    <ChevronDown className="group:fill-white transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col px-4">
                  {TEMP_SUB_MENU.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </AccordionContent>
              </li>
            </AccordionItem>
          </ul>
        </menu>
      </Accordion>
    </div>
  );
};

export default SideBarMenu;
