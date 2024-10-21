"use client";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useMemo } from "react";

import { useReportJourneyVehicle } from "#/modules/reports/application/hooks/useReportJourneyVehicle";
import { Skeleton } from "#/shared/components/ui/skeleton";
import { sumDuration, subtractDuration } from "#/shared/lib/utils";

dayjs.extend(duration);

const ReportJourneyVehicleSummary: React.FC = () => {
  const { data, isFetching } = useReportJourneyVehicle();

  const summary = useMemo(() => {
    const copyData = data?.slice();

    const defaultSummary = {
      totalDistance: "0 km",
      totalDuration: "0s",
      totalDrivingTime: "0s",
      totalIdleTime: "0s",
      topSpeed: "0 kph",
      avgSpeed: "0 kph",
      fuelConsumption: "0 L",
      fuelCost: "0",
    };

    if (!copyData) return defaultSummary;

    return copyData.reduce((acc, curr, index) => {
      const lastIndex = copyData.length - 1;
      if (index === lastIndex) {
        acc.totalDistance = curr.distance;
        acc.fuelConsumption = curr.fuelConsumptionGps
          ? curr.fuelConsumptionGps
          : "0 Liters";
        acc.fuelCost = curr.fuelPriceGps ? curr.fuelPriceGps : "0";
        acc.topSpeed = curr.topSpeed ? curr.topSpeed : "0 kph";
        acc.avgSpeed = curr.averageSpeed ? curr.averageSpeed : "0 kph";
      }

      acc.totalDuration = sumDuration(acc.totalDuration, curr.duration);
      acc.totalDrivingTime = sumDuration(
        acc.totalDrivingTime,
        curr.driveDuration,
      );
      acc.totalIdleTime = subtractDuration(
        acc.totalDuration,
        acc.totalDrivingTime,
      );
      return acc;
    }, defaultSummary);
  }, [data]);

  return (
    <div className="flex justify-between gap-4 flex-wrap">
      <div className="w-[22%]">
        <span className="block font-bold">Total Distance:</span>
        <SummaryValue value={summary.totalDistance} isLoading={isFetching} />
      </div>

      <div className="w-[22%]">
        <span className="block font-bold">Total Duration:</span>
        <SummaryValue value={summary.totalDuration} isLoading={isFetching} />
      </div>

      <div className="w-[22%]">
        <span className="block font-bold">Total Driving Time:</span>
        <SummaryValue value={summary.totalDrivingTime} isLoading={isFetching} />
      </div>

      <div className="w-[22%]">
        <span className="block font-bold">Total Idle Time:</span>
        <SummaryValue value={summary.totalIdleTime} isLoading={isFetching} />
      </div>

      <div className="w-[22%]">
        <span className="block font-bold">Top Speed:</span>
        <SummaryValue value={summary.topSpeed} isLoading={isFetching} />
      </div>

      <div className="w-[22%]">
        <span className="block font-bold">Average Speed:</span>
        <SummaryValue value={summary.avgSpeed} isLoading={isFetching} />
      </div>

      <div className="w-[22%]">
        <span className="block font-bold">Fuel Consumption</span>
        <SummaryValue value={summary.fuelConsumption} isLoading={isFetching} />
      </div>

      <div className="w-[22%]">
        <span className="block font-bold">Fuel Cost</span>
        <SummaryValue value={summary.fuelCost} isLoading={isFetching} />
      </div>
    </div>
  );
};

const SummaryValue: React.FC<{
  isLoading: boolean;
  value: string;
}> = ({ isLoading, value }) => {
  return isLoading ? (
    <Skeleton className="h-10 rounded-md" />
  ) : (
    <span className="block text-end p-2 bg-zinc-100 border rounded-md">
      {value}
    </span>
  );
};

export default ReportJourneyVehicleSummary;
