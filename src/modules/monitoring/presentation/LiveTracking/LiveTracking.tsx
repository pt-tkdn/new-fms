"use client";
import {
  APIProvider,
  InfoWindow,
  Map,
  useMap,
} from "@vis.gl/react-google-maps";
import dayjs from "dayjs";
import React, { useEffect, useMemo, useState } from "react";

import type { Vehicle } from "#/modules/assets/domain/entities/vehicle";
import { useLiveTrackingQuery } from "#/modules/monitoring/applications/hooks/useLiveTrackingQuery";
import VehicleMarker from "#/modules/monitoring/presentation/LiveTracking/VehicleMarker";
import { useAccountState } from "#/modules/user/application/context/AccountProvider";
import { Chip } from "#/shared/components/ui/chip";
import { Skeleton } from "#/shared/components/ui/skeleton";
import ShownVehicles from "#/modules/monitoring/presentation/LiveTracking/ShownVehicles";

interface LiveTrackingMapProps {
  vehicles: Vehicle[];
  isLoading: boolean;
}

const LiveTrackingMap: React.FC<LiveTrackingMapProps> = ({
  isLoading,
  vehicles,
}) => {
  const map = useMap();
  const [vehicleInfo, setVehicleInfo] = useState<Vehicle | null>();
  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);

  useEffect(() => {
    const trafficLayer = new google.maps.TrafficLayer({
      map,
      autoRefresh: false,
    });

    if (!map) {
      return;
    }
    if (vehicles.length) {
      const bounds = new google.maps.LatLngBounds();
      vehicles.forEach((item) => {
        if (item.gpsPosition) {
          bounds.extend(item.gpsPosition);
        }
      });
      map.setCenter(bounds.getCenter());
    }

    return () => {
      trafficLayer.setMap(null);
    };
  }, [map, vehicles]);

  if (isLoading) {
    return <Skeleton className="h-auto w-full" />;
  }
  return (
    <Map
      mapId="live-tracking"
      className="h-[512px] w-full"
      defaultCenter={{ lat: -6.175, lng: 106.8266 }}
      defaultZoom={12}
      gestureHandling="cooperative"
      disableDefaultUI={true}
      fullscreenControl={true}
    >
      {vehicleInfo && (
        <InfoWindow
          anchor={selectedMarker}
          onClose={() => setVehicleInfo(null)}
        >
          <div className="max-h-[184px] overflow-y-auto">
            <table>
              <tbody>
                <tr>
                  <td className="font-bold">Vehicle No</td>
                  <td>:</td>
                  <td>{vehicleInfo.vehicleNo}</td>
                </tr>
                <tr>
                  <td className="font-bold">Vehicle Code</td>
                  <td>:</td>
                  <td>{vehicleInfo.vehicleCode}</td>
                </tr>
                <tr>
                  <td className="font-bold">Speed</td>
                  <td>:</td>
                  <td>{vehicleInfo.gpsPosition?.speed} km/h</td>
                </tr>
                {vehicleInfo.gpsPosition?.sensors.map((sensor) => {
                  return (
                    <tr key={sensor.id}>
                      <td className="font-bold">
                        {sensor.name.charAt(0).toUpperCase() +
                          sensor.name.substring(1)}
                      </td>
                      <td>:</td>
                      <td>{sensor.value}</td>
                    </tr>
                  );
                })}

                <tr>
                  <td className="font-bold">Address</td>
                  <td>:</td>
                  <td>{vehicleInfo.gpsPosition?.address}</td>
                </tr>

                <tr>
                  <td className="font-bold">Stop Duration</td>
                  <td>:</td>
                  <td>{vehicleInfo.gpsPosition?.stopDuration}</td>
                </tr>
                <tr>
                  <td className="font-bold">Last Updated</td>
                  <td>:</td>
                  <td>
                    {dayjs(
                      vehicleInfo.gpsPosition!.movedTimestamp * 1000,
                    ).format("MMM DD, YYYY")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </InfoWindow>
      )}
      {vehicles.map((item) => {
        return (
          <VehicleMarker
            key={item.id}
            vehicle={item}
            onClick={(vehicle, marker) => {
              setVehicleInfo(vehicle);
              setSelectedMarker(marker);
            }}
          />
        );
      })}
    </Map>
  );
};

const LiveTracking = () => {
  const account = useAccountState();
  const { data, isPending } = useLiveTrackingQuery(account?.id);
  const [shownVehicle, setShownVehicle] = useState<Record<
    number,
    boolean
  > | null>(null);

  useEffect(() => {
    if (!shownVehicle && data) {
      setShownVehicle(
        data?.reduce<Record<number, boolean>>((acc, item) => {
          acc[item.id] = true;
          return acc;
        }, {}),
      );
    }
  }, [data, shownVehicle]);

  const filteredData = useMemo(() => {
    if (!shownVehicle) return data;

    return data?.filter((item) => {
      return shownVehicle[item.id];
    });
  }, [data, shownVehicle]);

  if (!account?.id) {
    return <span className="m-auto">Please select an account first</span>;
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <ShownVehicles
        vehicles={data ?? []}
        isLoading={isPending}
        selectedVehicles={shownVehicle ?? {}}
        onSelected={(vehicle) => {
          setShownVehicle((prev) => ({
            ...prev,
            [vehicle.id]: !prev![vehicle.id],
          }));
        }}
      />
      <div className="flex flex-1">
        <LiveTrackingMap vehicles={filteredData ?? []} isLoading={isPending} />
      </div>
    </APIProvider>
  );
};

export default LiveTracking;
