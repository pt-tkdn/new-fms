"use client";
import { Button } from "#/shared/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/shared/components/ui/popover";
import { cn } from "#/shared/lib/utils";
import {
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Command,
} from "#/shared/components/ui/command";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAccountsQuery } from "#/modules/user/application/hooks/useAccountsQuery";
import {
  useAccountActions,
  useAccountState,
} from "#/modules/user/application/context/AccountProvider";

const SelectAccount: React.FC = () => {
  const { data } = useAccountsQuery();
  const [open, setOpen] = useState(false);
  const account = useAccountState();
  const setAccount = useAccountActions();
  const [search, setSearch] = useState("");

  const filteredData = data?.filter((acc) =>
    acc.name.toLowerCase().includes(search.toLowerCase()),
  );
  const selectedAccount = data?.find(
    (acc) => acc.id.toString() === account?.id.toString(),
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-80 rounded-lg font-bold flex justify-between py-3 h-auto"
        >
          {account?.id ? selectedAccount?.name : "Choose Account"}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80 p-0">
        <Command shouldFilter={false} label="Account">
          <CommandInput
            onValueChange={setSearch}
            placeholder="Search Account..."
          />
          <CommandList>
            <CommandEmpty>No account found.</CommandEmpty>
            <CommandGroup>
              {filteredData?.map((acc) => (
                <CommandItem
                  key={acc.id}
                  value={acc.id.toString()}
                  onSelect={(currentValue) => {
                    setAccount(
                      filteredData.find(
                        (acc) => acc.id.toString() === currentValue,
                      )!,
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      account?.id.toString() === acc.id.toString()
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {acc.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectAccount;
