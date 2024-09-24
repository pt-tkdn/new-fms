import { iconPaths } from "#/shared/assets/icon_paths";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#/shared/components/ui/accordion";
import Image from "next/image";

export default function OverviewPage() {
  return (
    <div className="flex flex-col p-8 gap-y-8">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold ">Hi, John Doe 👋🏻</span>
        <span className="text-xl font-semibold opacity-50">
          {new Date().toISOString()}
        </span>
      </div>
      <main className="flex flex-row gap-x-12">
        <div className="flex flex-1 flex-col gap-y-8">
          <section>
            <ul className="flex flex-row justify-between">
              <li className="flex flex-row justify-between p-4 bg-white rounded-lg shadow-sm w-[204px] h-32 hover:bg-indigo-50 ">
                <div className="flex flex-col h-full justify-between">
                  <span className="text-3xl font-bold">12</span>
                  <span className="opacity-50">Maintenance</span>
                </div>
                <div className="flex w-14 h-14 rounded-3xl bg-indigo-100">
                  <Image
                    alt="Maintenance"
                    src={iconPaths.icMaintenance}
                    className="w-6 h-6 object-contain my-auto mx-auto"
                  />
                </div>
              </li>
              <li className="flex flex-row justify-between p-4 bg-white rounded-lg shadow-sm w-[204px] h-32 hover:bg-orange-50 ">
                <div className="flex flex-col h-full justify-between">
                  <span className="text-3xl font-bold">32</span>
                  <span className="opacity-50">Parking</span>
                </div>
                <div className="flex w-14 h-14 rounded-3xl bg-orange-100">
                  <Image
                    alt="Maintenance"
                    src={iconPaths.icParkSign}
                    className="w-6 h-6 object-contain my-auto mx-auto"
                  />
                </div>
              </li>

              <li className="flex flex-row justify-between p-4 bg-white rounded-lg shadow-sm w-[204px] h-32 hover:bg-green-50 ">
                <div className="flex flex-col h-full justify-between">
                  <span className="text-3xl font-bold">32</span>
                  <span className="opacity-50">Driving</span>
                </div>
                <div className="flex w-14 h-14 rounded-3xl bg-green-100">
                  <Image
                    alt="Maintenance"
                    src={iconPaths.icSteerWheel}
                    className="w-6 h-6 object-contain my-auto mx-auto"
                  />
                </div>
              </li>
              <li className="flex flex-row justify-between p-4 bg-white rounded-lg shadow-sm w-[204px] h-32 hover:bg-yellow-50">
                <div className="flex flex-col h-full justify-between">
                  <span className="text-3xl font-bold">5</span>
                  <span className="opacity-50">Idle</span>
                </div>
                <div className="flex w-14 h-14 rounded-3xl bg-yellow-100">
                  <Image
                    alt="Maintenance"
                    src={iconPaths.icSandWatch}
                    className="w-6 h-6 object-contain my-auto mx-auto"
                  />
                </div>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-y-4 w-full h-[528px] bg-white rounded-lg shadow-sm p-5">
            <span className="text-xl font-bold">Live Map</span>
            <div className="flex flex-1 bg-slate-400 items-center justify-center">
              Map goes here
            </div>
          </section>
        </div>

        <div className="sticky top-20 w-72 max-h-96 bg-white rounded-md shadow-sm">
          <div className="flex p-8 gap-y-8">
            <span className="text-xl font-semibold">Last Updates</span>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
