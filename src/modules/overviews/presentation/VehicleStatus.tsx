"use client";
import { iconPaths } from "#/shared/assets/icon_paths";
import Image from "next/image";
import { useDashboardQuery } from "#/modules/overviews/application/hooks/useDashboardQuery";
import { Skeleton } from "#/shared/components/ui/skeleton";

const VehicleStatus: React.FC = () => {
  const { data, isPending } = useDashboardQuery();

  const vehicleStatus = data?.vehicleStatus.reduce(
    (acc, item) => {
      if (item.label === "Maintenance") {
        acc.maintenance = item.data;
      }
      if (item.label === "Parking") {
        acc.parking = item.data;
      }
      if (item.label === "Driving") {
        acc.driving = item.data;
      }
      if (item.label === "Idle") {
        acc.idle = item.data;
      }
      acc.totalUnit += item.data;
      return acc;
    },
    {
      totalUnit: 0,
      maintenance: 0,
      parking: 0,
      driving: 0,
      idle: 0,
    },
  );

  return (
    <section>
      <ul className="flex flex-row justify-between">
        <li className="card flex flex-row justify-between p-4 w-[204px] h-32 hover:bg-sky-50 transition-colors">
          <div className="flex flex-col h-full justify-between">
            <StatusVehicleValue
              value={vehicleStatus?.totalUnit.toString() ?? "0"}
              isPending={isPending}
            />
            <span className="opacity-50">Total Unit</span>
          </div>
          <div className="flex w-14 h-14 rounded-3xl bg-sky-100">
            <Image
              alt="Total Unit"
              src={iconPaths.icVehicle}
              className="w-6 h-6 object-contain my-auto mx-auto"
            />
          </div>
        </li>
        <li className="card flex flex-row justify-between p-4 w-[204px] h-32 hover:bg-indigo-50 transition-colors">
          <div className="flex flex-col h-full justify-between">
            <StatusVehicleValue
              value={vehicleStatus?.maintenance.toString() ?? "0"}
              isPending={isPending}
            />
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
            <StatusVehicleValue
              value={vehicleStatus?.parking.toString() ?? "0"}
              isPending={isPending}
            />
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
            <StatusVehicleValue
              value={vehicleStatus?.driving.toString() ?? "0"}
              isPending={isPending}
            />
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
            <StatusVehicleValue
              value={vehicleStatus?.idle.toString() ?? "0"}
              isPending={isPending}
            />
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

const StatusVehicleValue: React.FC<{
  value: string | number;
  isPending: boolean;
}> = ({ value, isPending }) => {
  if (isPending) {
    return <Skeleton className="w-16 h-8" />;
  }
  return <span className="text-3xl font-bold">{value}</span>;
};

export default VehicleStatus;
