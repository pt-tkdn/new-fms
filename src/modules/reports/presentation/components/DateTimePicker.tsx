"use client";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "#/shared/components/ui/button";
import { Calendar } from "#/shared/components/ui/calendar";
import { Label } from "#/shared/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/shared/components/ui/popover";
import { TimePickerInput } from "#/shared/components/ui/time-picker/time-picker-input";
import { cn } from "#/shared/lib/utils";

interface DateTimePickerProps {
  className?: string;
  dateFormat?: string;
  onDateTimeChange?: (date: Date) => void;
  value?: Date;
  label?: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  className,
  dateFormat,
  onDateTimeChange,
  value,
  label,
}) => {
  const [date, setDate] = useState<Date>(
    value ?? dayjs().startOf("day").toDate(),
  );
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className={cn("space-y-1", className)}>
        <Label className="ml-1 text-sm font-bold text-gray-700">{label}</Label>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full rounded-lg font-bold flex justify-between py-3 h-auto"
          >
            {date
              ? dayjs(value).format(dateFormat ?? "DD/MM/YYYY HH:mm")
              : "Choose Date"}
            <CalendarIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverContent className="p-0">
        <div className="flex flex-1 flex-col border-gray-200">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate((val) => date ?? val);
            }}
          />
          <div className="flex items-end gap-4 border-t p-4">
            <div className="grid gap-1">
              <Label className="text-sm font-medium text-gray-700">Hours</Label>
              <TimePickerInput picker="hours" date={date} setDate={setDate} />
            </div>
            <div className="grid gap-1">
              <Label className="text-sm font-medium text-gray-700">
                Minutes
              </Label>
              <TimePickerInput picker="minutes" date={date} setDate={setDate} />
            </div>
            <Button
              className="w-full"
              onClick={() => {
                setOpen(false);
                onDateTimeChange?.(date);
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateTimePicker;
