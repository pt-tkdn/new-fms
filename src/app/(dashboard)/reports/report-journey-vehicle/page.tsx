import type { Metadata } from "next";
import * as React from "react";

import VehicleProvider from "#/modules/assets/application/context/VehicleProvider";
import AccountProvider from "#/modules/user/application/context/AccountProvider";
import ReportJourneyVehicleForm from "#/modules/reports/presentation/ReportJourneyVehicleForm/ReportJourneyVehicleForm";
import ReportJourneyVehicleTable from "#/modules/reports/presentation/ReportJourneyVehicleForm/ReportJourneyVehicleTable";

export const metadata: Metadata = {
  title: "Report Journey Vehicle",
  description: "Report Journey Vehicle",
};

const ReportJourneyVehiclePage = () => {
  return (
    <main className="p-8 space-y-4">
      <AccountProvider>
        <div className="flex flex-1 flex-col gap-y-4">
          <AccountProvider>
            <VehicleProvider>
              <ReportJourneyVehicleForm />
              <ReportJourneyVehicleTable />
            </VehicleProvider>
          </AccountProvider>
        </div>
      </AccountProvider>
    </main>
  );
};

export default ReportJourneyVehiclePage;
