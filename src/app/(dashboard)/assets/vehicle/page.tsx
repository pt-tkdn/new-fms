import { Plus } from "lucide-react";
import type { Metadata } from "next";
import * as React from "react";

import VehiclesTable from "#/modules/assets/presentation/VehiclesTable";
import AccountProvider from "#/modules/user/application/context/AccountProvider";
import SelectAccount from "#/modules/user/presentation/SelectAccount";
import { Button } from "#/shared/components/ui/button";

export const metadata: Metadata = {
  title: "Vehicles",
  description: "Vehicles",
};

const VehiclePage = () => {
  return (
    <main className="flex flex-col p-8 gap-y-4">
      <AccountProvider>
        <div className="flex flex-row justify-between items-center">
          <SelectAccount />

          <Button className="bg-green-400 hover:bg-green-400/90">
            Create New
            <span className="font-bold">
              <Plus className="ml-2" size={12} strokeWidth={4} />
            </span>
          </Button>
        </div>

        <VehiclesTable />
      </AccountProvider>
    </main>
  );
};

export default VehiclePage;
