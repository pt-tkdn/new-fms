"use client";
import {
  APIProvider,
  InfoWindow,
  Map,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import dayjs from "dayjs";
import React, { useEffect, useMemo, useState } from "react";

import type { Vehicle } from "#/modules/assets/domain/entities/vehicle";
import { useLiveTrackingQuery } from "#/modules/monitoring/applications/hooks/useLiveTrackingQuery";
import ShownVehicles from "#/modules/monitoring/presentation/LiveTracking/ShownVehicles";
import VehicleMarker from "#/modules/monitoring/presentation/LiveTracking/VehicleMarker";
import { useAccountState } from "#/modules/user/application/context/AccountProvider";
import { Skeleton } from "#/shared/components/ui/skeleton";

interface LiveTrackingMapProps {
  vehicles: Vehicle[];
  isLoading: boolean;
}

const LiveTrackingMap: React.FC<LiveTrackingMapProps> = ({
  isLoading,
  vehicles,
}) => {
  const map = useMap();
  const mapLib = useMapsLibrary("maps");
  const [vehicleInfo, setVehicleInfo] = useState<Vehicle | null>();
  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);

  // this effect responsible for following tasks:
  // 1. create traffic layer
  // 2. create tail line for selected vehicle
  // 3. set map center to the bound of vehicles
  // 4. remove traffic layer when component is unmounted
  useEffect(() => {
    if (!map) {
      return;
    }

    const trafficLayer = new google.maps.TrafficLayer({
      map,
      autoRefresh: false,
    });

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
  }, [map, mapLib, vehicleInfo?.gpsPosition?.tail, vehicleInfo?.id, vehicles]);

  useEffect(() => {
    if (mapLib && vehicleInfo?.id) {
      const tailLine = new mapLib.Polyline({
        path:
          vehicleInfo.gpsPosition?.tail.map((item) => {
            return {
              lat: parseFloat(item.lat),
              lng: parseFloat(item.lng),
            };
          }) ?? [],
        strokeColor: "blue",
      });
      tailLine.setMap(map);

      return () => {
        tailLine.setMap(null);
      };
    }
  }, [map, mapLib, vehicleInfo?.gpsPosition?.tail, vehicleInfo?.id]);

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

  // this effect will run when the following conditions are met:
  // 1. data is available
  // 2. shownVehicle is not available
  // 3. first data is not found in shownVehicle
  useEffect(() => {
    if (!shownVehicle && data) {
      setShownVehicle(
        data.reduce<Record<number, boolean>>((acc, item) => {
          acc[item.id] = true;
          return acc;
        }, {}),
      );
    }

    if (data && shownVehicle) {
      const firstData = data[0];
      if (shownVehicle[firstData?.id] === undefined) {
        setShownVehicle(
          data.reduce<Record<number, boolean>>((acc, item) => {
            acc[item.id] = true;
            return acc;
          }, {}),
        );
      }
    }
  }, [data, shownVehicle]);

  const filteredData = useMemo(() => {
    if (!shownVehicle) return data;

    return data?.filter((item) => {
      return shownVehicle[item.id];
    });
  }, [data, shownVehicle]);

  if (!account?.id) {
    return (
      <div className="flex flex-1 items-center justify-center min-h-[30rem]">
        Please select an account first
      </div>
    );
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
      <div className="space-y-8 ">
        <LiveTrackingMap vehicles={filteredData ?? []} isLoading={isPending} />
      </div>
    </APIProvider>
  );
};

export default LiveTracking;
