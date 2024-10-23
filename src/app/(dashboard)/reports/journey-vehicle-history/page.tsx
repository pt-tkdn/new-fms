import type { Metadata } from "next";
import * as React from "react";

import VehicleProvider from "#/modules/assets/application/context/VehicleProvider";
import HistoryMap from "#/modules/reports/presentation/JourneyVehicleHistory/HistoryMap";
import ReportJourneyVehicleTable from "#/modules/reports/presentation/ReportJourneyVehicle/ReportJourneyVehicleTable";
import AccountProvider from "#/modules/user/application/context/AccountProvider";

export const metadata: Metadata = {
  title: "Journey Vehicle History",
  description: "Journey Vehicle History",
};

const JourneyVehicleHistory = () => {
  return (
    <main className="p-8 space-y-4">
      <AccountProvider>
        <AccountProvider>
          <VehicleProvider>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex flex-col gap-y-4">
                <span>TODOOO</span>
                {/* <ReportJourneyVehicleForm onSubmit={console.log} />
                <ReportJourneyVehicleSummary /> */}
              </div>
              <HistoryMap />
            </div>
            <ReportJourneyVehicleTable />
          </VehicleProvider>
        </AccountProvider>
      </AccountProvider>
    </main>
  );
};

export default JourneyVehicleHistory;
