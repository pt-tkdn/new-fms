import LiveTracking from "#/modules/monitoring/presentation/LiveTracking/LiveTracking";
import AccountProvider from "#/modules/user/application/context/AccountProvider";
import SelectAccount from "#/modules/user/presentation/SelectAccount";

export default function LiveMapPage() {
  return (
    <div className="flex flex-1 p-8 max-w-[calc(100vw-var(--sidebar-width))]">
      <AccountProvider>
        <section className="card p-5 w-full">
          <SelectAccount />

          <LiveTracking />
        </section>
      </AccountProvider>
    </div>
  );
}
