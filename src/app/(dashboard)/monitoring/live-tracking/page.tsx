import type { Metadata } from "next";

import LiveTracking from "#/modules/monitoring/presentation/LiveTracking/LiveTracking";
import AccountProvider from "#/modules/user/application/context/AccountProvider";
import SelectAccount from "#/modules/user/presentation/SelectAccount";

export const metadata: Metadata = {
  title: "Live Tracking",
  description: "Live Tracking",
};

export default function LiveMapPage() {
  return (
    <div className="flex flex-1 p-8">
      <AccountProvider>
        <section className="card p-5 w-full">
          <SelectAccount />

          <LiveTracking />
        </section>
      </AccountProvider>
    </div>
  );
}
