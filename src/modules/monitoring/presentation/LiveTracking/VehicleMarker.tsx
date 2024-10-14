import {
  useAdvancedMarkerRef,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

import type { Vehicle } from "#/modules/assets/domain/entities/vehicle";
import type { GpsPosition } from "#/modules/monitoring/domain/entities/gpsPosition";
import IcCar from "#/shared/assets/icons/ic_car.svg";

interface VehicleMarkerProps {
  vehicle: Vehicle;
  onClick: (
    vehicle: Vehicle,
    marker: google.maps.marker.AdvancedMarkerElement | null,
  ) => void;
}

const VehicleMarker: React.FC<VehicleMarkerProps> = ({ vehicle, onClick }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  if (!vehicle.gpsPosition) {
    return null;
  }

  const handleColor = (position: GpsPosition) => {
    let color = "#dc3545";

    if (!position) {
      return color;
    }

    if (position.speed > 0) {
      color = "#28a745";
      return color;
    }

    if (position.sensors.length) {
      const acc = position.sensors.find((sensor) => sensor.type === "acc");

      if (acc && acc.val) {
        color = "#ffc107";
        return color;
      }

      if (position.online === "ack") {
        color = "#ffc107";
        return color;
      }
    }

    return color;
  };

  const color = handleColor(vehicle.gpsPosition);

  const { gpsPosition } = vehicle;
  return (
    <AdvancedMarker
      ref={markerRef}
      onClick={() => {
        onClick(vehicle, marker);
      }}
      position={{
        lat: gpsPosition.lat,
        lng: gpsPosition.lng,
      }}
    >
      <IcCar
        fill={color}
        transform={`rotate(${gpsPosition.course})`}
        width={30}
        height={42}
      />
    </AdvancedMarker>
  );
};

export default VehicleMarker;
