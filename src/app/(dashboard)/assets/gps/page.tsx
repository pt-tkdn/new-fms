import { Plus } from "lucide-react";
import Head from "next/head";
import * as React from "react";

import GPSTable from "#/modules/assets/presentation/GPSTable";
import AccountProvider from "#/modules/user/application/context/AccountProvider";
import SelectAccount from "#/modules/user/presentation/SelectAccount";
import { Button } from "#/shared/components/ui/button";

const GPSPage = () => {
  return (
    <>
      <Head>
        <title>GPS</title>
      </Head>
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

          <GPSTable />
        </AccountProvider>
      </main>
    </>
  );
};

export default GPSPage;
