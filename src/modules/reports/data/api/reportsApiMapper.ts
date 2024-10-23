import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
import type { ReportsApiDto } from "#/modules/reports/data/api/reportsApiDto";
import type {
  Graph,
  GraphSensor,
} from "#/modules/reports/domain/entities/reportGraphSensor";
import type { ReportJourneyVehicle } from "#/modules/reports/domain/entities/reportJourneyVehicle";

export const mapReportsJourneyVehicleResponseToEntity = (
  response: ReportsApiDto.ReportsJourneyVehicleResponse,
): ReportJourneyVehicle[] => {
  return response.data.map((report) => {
    return {
      averageSpeed: report.average_speed,
      distance: report.distance,
      driveDuration: report.drive_duration,
      duration: report.duration,
      end: report.end,
      endLocation: report.end_location,
      fuelConsumptionGps: report.fuel_consumption_gps,
      fuelPriceGps: report.fuel_price_gps,
      start: report.start,
      startLocation: report.start_location,
      status: report.status,
      stopDuration: report.stop_duration,
      topSpeed: report.top_speed,
    };
  });
};

/**
 * Maps the response from the Reports API to a sensor entity format.
 *
 * @param response - The response object from the Reports API containing sensor data.
 *
 * @returns An array of sensor entities with their respective data.
 *
 * The function performs the following steps:
 * 1. Initializes an empty array `sensors` to store the mapped sensor entities.
 * 2. Retrieves the client's time zone offset using `dayjs().utcOffset()`.
 * 3. Iterates through the sensor data in the response to match sensor names and add new sensors to the `sensors` array.
 * 4. Populates the data for each sensor by iterating through the response data and formatting the timestamps.
 * 5. Filters and adds the data points to the corresponding sensor's data array.
 *
 * The function logs various steps for debugging purposes, including:
 * - The client's time zone offset.
 * - When a new sensor is added.
 * - When data is added for a specific timestamp.
 * - When sensor data is populated.
 * - The final sensors array.
 */
export const mapReportsGraphSensorsResponseToEntity = (
  response: ReportsApiDto.ReportsGraphSensorsResponse,
): GraphSensor[] => {
  const sensors: GraphSensor[] = [];
  const clientTimeZoneOffset = dayjs().utcOffset();
  console.log("Client Time Zone Offset:", clientTimeZoneOffset);

  // Loop through sensor data
  for (let i = 0; i < response.data.sensor_data.length; i++) {
    for (let j = 0; j < response.data.sensors.length; j++) {
      // Check if the sensor name matches the sensor data name
      if (
        response.data.sensors[j].name &&
        response.data.sensors[j].name.split(" ")[0] ===
          response.data.sensor_data[i].sensor_name
      ) {
        console.log(
          response.data.sensors[j].name,
          response.data.sensor_data[i].sensor_name,
        );
        const snts = sensors.findIndex(
          (item) => item.key === response.data.sensors[j].key,
        );
        if (snts < 0) {
          sensors.push({
            name: response.data.sensors[j].name,
            key: response.data.sensors[j].key,
            uom: response.data.sensor_data[i].unit_of_measurement,
            data: [],
          });
          console.log("Added new sensor:", response.data.sensors[j].name);
          break;
        }
      }
    }
  }

  // Loop through sensors to populate data
  for (let i = 0; i < sensors.length; i++) {
    const data: { [key: string]: Graph } = {};
    response.data.data.forEach((item) => {
      const datetime = dayjs(item.t).utcOffset(clientTimeZoneOffset);
      const hour = datetime.format("DD-MM-YYYY HH");
      const itemData: Graph = {
        // @ts-expect-error - The key is dynamically set based on the sensor data.
        value: parseFloat(item[sensors[i].key as keyof typeof item]),
        label: datetime.format("DD-MM-YYYY HH:mm"),
      };

      if (!data[hour]) {
        data[hour] = itemData;
        console.log("Added data for:", hour);
      }
    });
    sensors[i].data = Object.values(data);
    console.log("Sensor data populated for:", sensors[i].name);
  }
  console.log("Final sensors array:", sensors);
  return sensors;
};
