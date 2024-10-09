"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { useUserSelector } from "#/modules/user/application/hooks/useUserStore";
import { Skeleton } from "#/shared/components/ui/skeleton";

const Greeting = () => {
  const name = useUserSelector((s) => s?.name);
  const [clock, setClock] = useState(
    dayjs().format("DD MMM YYYY, HH.mm.ss [WIB]"),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(dayjs().format("DD MMM YYYY, HH.mm.ss [WIB]"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center">
      <span className="text-2xl font-semibold ">Hi, {name} 👋🏻</span>
      <span className="text-lg font-semibold opacity-50">{clock}</span>
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
