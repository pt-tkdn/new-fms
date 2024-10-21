import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { twMerge } from "tailwind-merge";

dayjs.extend(duration);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sumDuration(a: string, b: string) {
  const splitValue = (value: string) => {
    return value.split(" ").reduce(
      (acc: [number, number, number], curr, _) => {
        if (curr.includes("h")) {
          const value = parseInt(curr.replace("h", ""));
          acc[0] = value;
        }

        if (curr.includes("m")) {
          const value = parseInt(curr.replace("m", ""));
          acc[1] = value;
        }

        if (curr.includes("s")) {
          const value = parseInt(curr.replace("s", ""));
          acc[2] = value;
        }
        return acc;
      },
      [0, 0, 0],
    );
  };

  const [aHours, aMinutes, aSeconds] = splitValue(a);

  const aValue = dayjs.duration({
    hours: aHours,
    minutes: aMinutes,
    seconds: aSeconds,
  });

  const [bHours, bMinutes, bSeconds] = splitValue(b);

  const bValue = dayjs.duration({
    hours: bHours,
    minutes: bMinutes,
    seconds: bSeconds,
  });

  const totalDuration = aValue.add(bValue).asSeconds();
  const hours = Math.floor(totalDuration / 3600);
  const minutes = Math.floor((totalDuration % 3600) / 60);
  const seconds = Math.floor(totalDuration % 60);
  return `${hours}h ${minutes}m ${seconds}s`;
}

export function subtractDuration(a: string, b: string) {
  const [aHours, aMinutes, aSeconds] = a.split(" ").map((x) => parseInt(x));
  const aValue = dayjs.duration({
    hours: aHours,
    minutes: aMinutes,
    seconds: aSeconds,
  });

  const [bHours, bMinutes, bSeconds] = b.split(" ").map((x) => parseInt(x));
  const bValue = dayjs.duration({
    hours: bHours,
    minutes: bMinutes,
    seconds: bSeconds,
  });

  const totalDuration = aValue.subtract(bValue);
  return totalDuration.format("H[h] m[m] s[s]");
}

export function calculateStringUnit(a: string, b: string) {
  const unit = a.replace(/[\d.]/g, "");
  const aValue = a.replace(/[^\d.]/g, "");
  const bValue = b.replace(/[^\d.]/g, "");

  if (!a || !b) {
    return a;
  }

  return `${(parseFloat(aValue) + parseFloat(bValue)).toFixed(2)} ${unit}`;
}
