"use client";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const LiveMap = () => {
  return (
    <section className="card p-5 flex flex-col gap-y-4 w-full h-[528px]">
      <span className="text-xl font-bold">Live Map</span>

      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <Map
          className="w-full h-full relative"
          defaultCenter={{ lat: -6.175, lng: 106.8266 }}
          defaultZoom={12}
          gestureHandling="cooperative"
          disableDefaultUI={true}
          fullscreenControl={true}
        >
          <Marker
            position={{
              lat: -6.175,
              lng: 106.8266,
            }}
          />
        </Map>
      </APIProvider>
    </section>
  );
};

export default LiveMap;
