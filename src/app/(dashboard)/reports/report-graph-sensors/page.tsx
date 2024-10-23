import type { Metadata } from "next";
import * as React from "react";

import VehicleProvider from "#/modules/assets/application/context/VehicleProvider";
import ReportGraphSensors from "#/modules/reports/presentation/ReportGraphSensors";
import AccountProvider from "#/modules/user/application/context/AccountProvider";

export const metadata: Metadata = {
  title: "Report Journey Vehicle",
  description: "Report Journey Vehicle",
};

const ReportGraphSensorsPage = () => {
  return (
    <main className="p-8 space-y-4">
      <AccountProvider>
        <div className="flex flex-1 flex-col gap-y-4">
          <AccountProvider>
            <VehicleProvider>
              <ReportGraphSensors />
            </VehicleProvider>
          </AccountProvider>
        </div>
      </AccountProvider>
    </main>
  );
};

export default ReportGraphSensorsPage;
