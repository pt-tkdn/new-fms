"use client";

import React from "react";

import { Label } from "#/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/shared/components/ui/select";
import { cn } from "#/shared/lib/utils";

const STOP_TIME = [
  {
    value: 60,
    label: "1 minute",
  },
  {
    value: 120,
    label: "2 minutes",
  },
  {
    value: 180,
    label: "3 minutes",
  },
  {
    value: 300,
    label: "5 minutes",
  },
  {
    value: 600,
    label: "10 minutes",
  },
  {
    value: 900,
    label: "15 minutes",
  },
  {
    value: 1800,
    label: "30 minutes",
  },
  {
    value: 3600,
    label: "1 hour",
  },
  {
    value: 7200,
    label: "2 hours",
  },
  {
    value: 14400,
    label: "4 hours",
  },
  {
    value: 21600,
    label: "6 hours",
  },
];

interface SelectStopTimeProps {
  onChange?: (value: number) => void;
  value?: number;
  className?: string;
}

const SelectStopTime: React.FC<SelectStopTimeProps> = ({
  onChange,
  value,
  className,
}) => {
  return (
    <div className={cn(className, "space-y-1")}>
      <Label className="ml-1 text-sm font-bold text-gray-700">
        Stop Duration
      </Label>
      <Select
        defaultValue={value?.toString()}
        onValueChange={(value) => onChange?.(parseInt(value))}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose Stop Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {STOP_TIME.map((item) => (
              <SelectItem key={item.value} value={item.value.toString()}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectStopTime;
