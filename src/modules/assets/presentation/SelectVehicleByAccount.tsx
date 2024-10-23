"use client";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import {
  useVehicleActions,
  useVehicleState,
} from "#/modules/assets/application/context/VehicleProvider";
import { useVehiclesQuery } from "#/modules/assets/application/hooks/useVehiclesQuery";
import { useAccountState } from "#/modules/user/application/context/AccountProvider";
import { Button } from "#/shared/components/ui/button";
import {
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Command,
} from "#/shared/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/shared/components/ui/popover";
import { cn } from "#/shared/lib/utils";

export interface SelectVehicleProps {
  className?: string;
  dropdownClassName?: string;
}

const SelectVehicleByAccount: React.FC<SelectVehicleProps> = ({
  className,
  dropdownClassName,
}) => {
  const account = useAccountState();
  const { data } = useVehiclesQuery(account?.id);
  const [open, setOpen] = useState(false);
  const vehicle = useVehicleState();
  const setVehicle = useVehicleActions();
  const [search, setSearch] = useState("");

  const [prevAccount, setPrevAccount] = useState(account?.id);

  useEffect(() => {
    if (prevAccount !== account?.id) {
      setPrevAccount(account?.id);
      setVehicle(null);
    }
    // Nah, it's ok
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account?.id, prevAccount]);

  const filteredData = data?.filter((acc) =>
    acc.vehicleCode.toLowerCase().includes(search.toLowerCase()),
  );
  const selectedVehicle = data?.find(
    (acc) => acc.id.toString() === vehicle?.id.toString(),
  );

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
          <span className="truncate">
            {vehicle?.id
              ? `${selectedVehicle?.vehicleNo} - ${selectedVehicle?.vehicleCode}`
              : "Choose Vehicle"}
          </span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className={cn("w-80 p-0", dropdownClassName)}>
        <Command shouldFilter={false} label="Vehicle">
          <CommandInput
            onValueChange={setSearch}
            placeholder="Search Vehicle..."
          />
          <CommandList>
            <CommandEmpty>No vehicle found.</CommandEmpty>
            <CommandGroup>
              {filteredData?.map((acc) => (
                <CommandItem
                  key={acc.id}
                  value={acc.id.toString()}
                  onSelect={(currentValue) => {
                    setVehicle(
                      filteredData.find(
                        (acc) => acc.id.toString() === currentValue,
                      )!,
                    );
                    setSearch("");
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      vehicle?.id.toString() === acc.id.toString()
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {acc.vehicleNo} - {acc.vehicleCode}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectVehicleByAccount;
