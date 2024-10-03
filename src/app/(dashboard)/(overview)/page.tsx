import LastUpdates from "#/modules/overviews/presentation/LastUpdates";
import LiveMap from "#/modules/overviews/presentation/LiveMap";
import RecentEvents from "#/modules/overviews/presentation/RecentEvents";
import VehicleStatus from "#/modules/overviews/presentation/VehicleStatus";
import dayjs from "dayjs";

export default function OverviewPage() {
  return (
    <div className="flex flex-col p-8 gap-y-8">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold ">Hi, John Doe 👋🏻</span>
        <span className="text-lg font-semibold opacity-50">
          {dayjs().format("DD MMM YYYY, HH.mm [WIB]")}
        </span>
      </div>
      <VehicleStatus />
      <main className="flex flex-row gap-x-12">
        <div className="flex flex-1 flex-col gap-y-8">
          <LiveMap />
          <RecentEvents />
        </div>
        <LastUpdates />
      </main>
    </div>
  );
}
