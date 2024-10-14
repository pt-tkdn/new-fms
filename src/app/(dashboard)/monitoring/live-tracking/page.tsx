import LiveTracking from "#/modules/monitoring/presentation/LiveTracking";
import AccountProvider from "#/modules/user/application/context/AccountProvider";
import SelectAccount from "#/modules/user/presentation/SelectAccount";

export default function LiveMapPage() {
  return (
    <div className="flex flex-grow flex-col p-8 gap-y-8">
      <div className="flex flex-grow flex-col gap-y-8">
        <AccountProvider>
          <section className="card p-5 flex flex-grow flex-col gap-y-8 w-full">
            <SelectAccount />
            <div className="flex flex-1">
              <LiveTracking />
            </div>
          </section>
        </AccountProvider>
      </div>
    </div>
  );
}
