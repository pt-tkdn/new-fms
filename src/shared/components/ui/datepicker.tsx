"use client";

import dayjs from "dayjs";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "#/shared/components/ui/button";
import { Calendar } from "#/shared/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/shared/components/ui/popover";
import { cn } from "#/shared/lib/utils";

export interface DatePickerProps {
  className?: string;
  dateFormat?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ className, dateFormat }) => {
  const [date, setDate] = useState<Date>(dayjs().subtract(1, "day").toDate());
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-80 rounded-lg font-bold flex justify-between py-3 h-auto",
            className,
          )}
        >
          {date
            ? dayjs(date).format(dateFormat ?? "DD/MM/YYYY")
            : "Choose Date"}
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date!);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
