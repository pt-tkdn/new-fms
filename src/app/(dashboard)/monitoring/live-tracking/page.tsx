import LiveTracking from "#/modules/monitoring/presentation/LiveTracking/LiveTracking";
import AccountProvider from "#/modules/user/application/context/AccountProvider";
import SelectAccount from "#/modules/user/presentation/SelectAccount";

export default function LiveMapPage() {
  return (
    <div className="flex flex-1 flex-col p-8 gap-y-8 flex-shrink-0">
      <div className="flex flex-1 flex-col gap-y-8">
        <AccountProvider>
          <section className="card p-5 flex flex-1 flex-col gap-y-4">
            <SelectAccount />

            <div className="flex flex-1 flex-col gap-y-4">
              <LiveTracking />
            </div>
          </section>
        </AccountProvider>
      </div>
    </div>
  );
}
