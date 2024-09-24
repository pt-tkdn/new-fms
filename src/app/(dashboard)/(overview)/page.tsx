export default function OverviewPage() {
  return (
    <main className="flex flex-row p-8 gap-x-12">
      <div className="flex flex-grow flex-col gap-y-8">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold ">Hi, John Doe 👋🏻</span>
          <span className="text-xl font-semibold opacity-50">
            {new Date().toISOString()}
          </span>
        </div>
        <section>
          <ul className="flex flex-row justify-between">
            <li className="flex flex-col p-4 bg-white rounded-lg shadow-sm w-[204px] h-32">
              <span className="text-3xl font-bold">12</span>
            </li>
            <li className="flex flex-col p-4 bg-white rounded-lg shadow-sm w-[204px] h-32">
              <span className="text-3xl font-bold">32</span>
            </li>
            <li className="flex flex-col p-4 bg-white rounded-lg shadow-sm w-[204px] h-32">
              <span className="text-3xl font-bold">112</span>
            </li>
            <li className="flex flex-col p-4 bg-white rounded-lg shadow-sm w-[204px] h-32">
              <span className="text-3xl font-bold">5</span>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-y-4 w-full h-[528px] bg-white rounded-lg shadow-sm p-5">
          <span className="text-xl font-bold">Live Map</span>
          <div className="flex flex-1 bg-slate-400 items-center justify-center">
            Map goes here
          </div>
        </section>
      </div>
      <div className="w-72 bg-white rounded-md shadow-sm">
        <div className="flex p-8 gap-y-8">
          <span className="text-xl font-semibold">Last Updates</span>
        </div>
      </div>
    </main>
  );
}
