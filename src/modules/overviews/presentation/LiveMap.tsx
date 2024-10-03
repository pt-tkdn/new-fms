"use client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const LiveMap = () => {
  return (
    <section className="card p-5 flex flex-col gap-y-4 w-full h-[528px]">
      <span className="text-xl font-bold">Live Map</span>
      {/* <div className="flex flex-1 bg-slate-400 items-center justify-center">
        Map goes here
      </div> */}

      <APIProvider apiKey="">
        <Map
          className="w-full h-full relative"
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
    </section>
  );
};

export default LiveMap;
