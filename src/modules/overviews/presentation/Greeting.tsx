"use client";
import { useUserSelector } from "#/modules/user/application/hooks/useUserStore";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Greeting = () => {
  const name = useUserSelector((s) => s.name);
  const [clock, setClock] = useState(
    dayjs().format("DD MMM YYYY, HH.mm.ss [WIB]")
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

export default Greeting;
