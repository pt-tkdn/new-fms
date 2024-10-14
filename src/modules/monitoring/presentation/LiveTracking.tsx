"use client";
import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  useAdvancedMarkerRef,
  useMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

import type { Vehicle } from "#/modules/assets/domain/entities/vehicle";
import { useLiveTrackingQuery } from "#/modules/monitoring/applications/hooks/useLiveTrackingQuery";
import { useAccountState } from "#/modules/user/application/context/AccountProvider";
import { Skeleton } from "#/shared/components/ui/skeleton";

const LiveTrackingMap = () => {
  const account = useAccountState();
  const { data, isPending } = useLiveTrackingQuery(account?.id);
  const map = useMap();
  const [vehicleInfo, setVehicleInfo] = useState<Vehicle | null>();
  const [markerRef, marker] = useAdvancedMarkerRef();

  useEffect(() => {
    if (!map) {
      return;
    }
    if (data?.length) {
      const bounds = new google.maps.LatLngBounds();
      data.forEach((item) => {
        if (item.position) {
          bounds.extend(item.position);
        }
      });
      map.fitBounds(bounds);
    }
  }, [data, map]);

  if (!account?.id) {
    return <span className="text-xl m-auto">Please select account.</span>;
  }

  if (isPending) {
    return <Skeleton className="h-auto w-full" />;
  }

  return (
    <Map
      mapId="live-tracking"
      className="h-auto w-full"
      defaultCenter={{ lat: -6.175, lng: 106.8266 }}
      defaultZoom={12}
      gestureHandling="cooperative"
      disableDefaultUI={true}
      fullscreenControl={true}
    >
      {vehicleInfo && (
        <InfoWindow anchor={marker} onClose={() => setVehicleInfo(null)}>
          <div className="flex flex-col">
            <span>{vehicleInfo.vehicleNo}</span>
            <span>{vehicleInfo.vehicleCode}</span>
          </div>
        </InfoWindow>
      )}
      {data?.map((item) => {
        if (!item.position) {
          return null;
        }
        console.log("item.position", item.position);
        return (
          <AdvancedMarker
            key={item.id}
            ref={markerRef}
            onClick={() => {
              setVehicleInfo(item);
            }}
            position={{
              lat: item.position?.lat,
              lng: item.position?.lng,
            }}
          />
        );
      })}
    </Map>
  );
};

const LiveTracking = () => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <LiveTrackingMap />
    </APIProvider>
  );
};

export default LiveTracking;
