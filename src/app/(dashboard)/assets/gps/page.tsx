import GPSList from "#/modules/assets/presentation/GPSList";
import { Button } from "#/shared/components/ui/button";
import { Input } from "#/shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/shared/components/ui/select";
import { Plus, Printer, Search } from "lucide-react";
import * as React from "react";

const GPSPage = () => {
  return (
    <main className="flex flex-col p-8 gap-y-4">
      <div className="flex flex-row justify-between items-center">
        <Select>
          <SelectTrigger className="sm:w-80 w-full">
            <SelectValue placeholder="Choose Account" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="TKDN">
                PT Teknologi Karya Digital Nusa Tbk
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="bg-green-400 hover:bg-green-400/90">
          Create New
          <span className="font-bold">
            <Plus className="ml-2" size={12} strokeWidth={4} />
          </span>
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-1 gap-x-7">
          <Select>
            <SelectTrigger className="sm:w-44 w-full">
              <SelectValue placeholder="Choose Account" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">10 row</SelectItem>
                <SelectItem value="25">25 row</SelectItem>
                <SelectItem value="50">50 row</SelectItem>
                <SelectItem value="100">100 row</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="sm:w-44 w-full">
              <SelectValue placeholder="Export Data" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Excel">Excel</SelectItem>
                <SelectItem value="PDF">PDF</SelectItem>
                <SelectItem value="CSV">CSV</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <button className="flex w-28 items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm ring-offset-white font-bold hover:bg-slate-50 transition-colors">
            Print
            <Printer size={20} />
          </button>
        </div>

        <div className="flex flex-1">
          <Input
            // @ts-expect-error @TODO: Fix this
            prefix={
              <Search
                size={18}
                className="text-slate-400 group-focus-within:text-primary"
              />
            }
            className="rounded-xl"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>

      <GPSList />
    </main>
  );
};

export default GPSPage;
