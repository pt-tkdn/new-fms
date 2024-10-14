"use client";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import advancedFormat from "dayjs/plugin/advancedFormat";

import { useEffect, useState } from "react";

import { useUserSelector } from "#/modules/user/application/hooks/useUserStore";
import { Skeleton } from "#/shared/components/ui/skeleton";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(advancedFormat);

const Greeting = () => {
  const name = useUserSelector((s) => s?.name);
  const [clock, setClock] = useState(dayjs().unix() * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(dayjs().unix() * 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const tz = dayjs.tz.guess();
  const abbrTz = new Intl.DateTimeFormat("id", {
    timeZone: tz,
    timeZoneName: "short",
  })
    .format(Date.now())
    .split(" ")[1];

  return (
    <div className="flex justify-between items-center">
      <span className="text-2xl font-semibold ">Hi, {name} 👋🏻</span>
      <span className="text-lg font-semibold opacity-50">
        {dayjs(clock).tz(tz).format("DD MMM YYYY, HH.mm.ss")} {abbrTz}
      </span>
    </div>
  );
};

const GreetingSkeleton = () => {
  return (
    <div className="flex justify-between items-center">
      <Skeleton className="w-40 h-8 bg-gray-200 rounded-lg animate-pulse" />
      <Skeleton className="w-40 h-8 bg-gray-200 rounded-lg animate-pulse" />
    </div>
  );
};

export { GreetingSkeleton };
export default Greeting;
