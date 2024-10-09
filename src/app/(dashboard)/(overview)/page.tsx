import Greeting from "#/modules/overviews/presentation/Greeting";
import LastUpdates from "#/modules/overviews/presentation/LastUpdates";
import LiveMap from "#/modules/overviews/presentation/LiveMap";
import RecentEvents from "#/modules/overviews/presentation/RecentEvents";
import VehicleStatus from "#/modules/overviews/presentation/VehicleStatus";

export default function OverviewPage() {
  return (
    <div className="flex flex-col p-8 gap-y-8">
      <Greeting />
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
