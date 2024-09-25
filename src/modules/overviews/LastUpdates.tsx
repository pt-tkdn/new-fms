import dayjs from "dayjs";
import { Info } from "lucide-react";

const TEMP_UPDATES = Array.from({ length: 20 }, (_, i) => {
  return {
    time: dayjs()
      .add(Math.ceil(Math.random() * 10), "minutes")
      .format("DD MMM YYYY, HH:mm:ss"),
    type: "Speeding",
    id: i,
  };
});

const LastUpdates = () => {
  return (
    <div className="sticky top-20 w-72 h-96 px-5 pb-5 space-y-5 card overflow-auto">
      <h1 className="block text-xl font-bold sticky z-[1] pt-5 top-0 bg-white">
        Last Updates
      </h1>
      <div className="space-y-5">
        {TEMP_UPDATES.map((update) => {
          return (
            <div className="flex gap-x-2" key={update.id}>
              <button className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200/90 transition-colors text-primary">
                <Info size={16} />
              </button>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">{update.type}</span>
                <span className="text-xs opacity-50">{update.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LastUpdates;
