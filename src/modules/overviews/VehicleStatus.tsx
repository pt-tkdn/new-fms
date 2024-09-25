import { iconPaths } from "#/shared/assets/icon_paths";
import Image from "next/image";

const VehicleStatus: React.FC = () => {
  return (
    <section>
      <ul className="flex flex-row justify-between">
        <li className="card flex flex-row justify-between p-4 w-[204px] h-32 hover:bg-blue-50 transition-colors">
          <div className="flex flex-col h-full justify-between">
            <span className="text-3xl font-bold">112</span>
            <span className="opacity-50">Total Unit</span>
          </div>
          <div className="flex w-14 h-14 rounded-3xl bg-blue-100">
            <Image
              alt="Maintenance"
              src={iconPaths.icVehicle}
              className="w-6 h-6 object-contain my-auto mx-auto"
            />
          </div>
        </li>
        <li className="card flex flex-row justify-between p-4 w-[204px] h-32 hover:bg-indigo-50 transition-colors">
          <div className="flex flex-col h-full justify-between">
            <span className="text-3xl font-bold">12</span>
            <span className="opacity-50">Maintenance</span>
          </div>
          <div className="flex w-14 h-14 rounded-3xl bg-indigo-100">
            <Image
              alt="Maintenance"
              src={iconPaths.icMaintenance}
              className="w-6 h-6 object-contain my-auto mx-auto"
            />
          </div>
        </li>
        <li className="card flex flex-row justify-between p-4 w-[204px] h-32 hover:bg-orange-50 transition-colors ">
          <div className="flex flex-col h-full justify-between">
            <span className="text-3xl font-bold">32</span>
            <span className="opacity-50">Parking</span>
          </div>
          <div className="flex w-14 h-14 rounded-3xl bg-orange-100">
            <Image
              alt="Maintenance"
              src={iconPaths.icParkSign}
              className="w-6 h-6 object-contain my-auto mx-auto"
            />
          </div>
        </li>

        <li className="card flex flex-row justify-between p-4 w-[204px] h-32 hover:bg-green-50 transition-colors ">
          <div className="flex flex-col h-full justify-between">
            <span className="text-3xl font-bold">32</span>
            <span className="opacity-50">Driving</span>
          </div>
          <div className="flex w-14 h-14 rounded-3xl bg-green-100">
            <Image
              alt="Maintenance"
              src={iconPaths.icSteerWheel}
              className="w-6 h-6 object-contain my-auto mx-auto"
            />
          </div>
        </li>
        <li className="card flex flex-row justify-between p-4 w-[204px] h-32 hover:bg-yellow-50 transition-colors">
          <div className="flex flex-col h-full justify-between">
            <span className="text-3xl font-bold">5</span>
            <span className="opacity-50">Idle</span>
          </div>
          <div className="flex w-14 h-14 rounded-3xl bg-yellow-100">
            <Image
              alt="Maintenance"
              src={iconPaths.icSandWatch}
              className="w-6 h-6 object-contain my-auto mx-auto"
            />
          </div>
        </li>
      </ul>
    </section>
  );
};
export default VehicleStatus;
