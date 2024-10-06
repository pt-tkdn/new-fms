"use client";
import { useDashboardQuery } from "#/modules/overviews/application/hooks/useDashboardQuery";
import { Skeleton } from "#/shared/components/ui/skeleton";
import dayjs from "dayjs";
import { Info } from "lucide-react";

const LastUpdates = () => {
  return (
    <div className="flex flex-col sticky top-20 w-72 h-96 space-y-5 card">
      <h1 className="block text-xl font-bold mx-5 z-[1] pt-5 top-0 h-12">
        Last Updates
      </h1>
      <div className="flex flex-grow w-full px-5 pb-5 space-y-5 overflow-auto ">
        <LastUpdatesList />
      </div>
    </div>
  );
};

const LastUpdatesList = () => {
  const { data, isPending, isSuccess } = useDashboardQuery();

  if (isSuccess && !data?.recentEvents.length) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <span className="text-lg font-semibold text-gray-400">
          No updates available
        </span>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex flex-col flex-1 space-y-5">
        {Array.from({ length: 6 }, (_, i) => i).map((_, index) => {
          return (
            <div className="flex gap-x-2" key={index}>
              <Skeleton className="flex items-center justify-center w-6 h-6 rounded-full">
                <Info size={24} className="text-transparent" />
              </Skeleton>
              <div className="flex flex-col w-full gap-y-1">
                <Skeleton className="w-full h-4 rounded-sm" />
                <Skeleton className="w-4/5 h-3 rounded-sm" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return data?.recentEvents.map((update) => {
    return (
      <div className="flex gap-x-2" key={update.id}>
        <button className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200/90 transition-colors text-blue-400">
          <Info size={16} />
        </button>
        <div className="flex flex-col gap-y-1">
          <span className="font-semibold">{update.type}</span>
          <span className="text-xs opacity-50">
            {dayjs(update.createdAt).format("DD MMM YYYY, HH:mm:ss")}
          </span>
        </div>
      </div>
    );
  });
};

export default LastUpdates;
