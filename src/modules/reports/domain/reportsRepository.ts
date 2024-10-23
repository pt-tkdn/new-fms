import type { GraphSensor } from "#/modules/reports/domain/entities/reportGraphSensor";
import type { ReportJourneyVehicle } from "#/modules/reports/domain/entities/reportJourneyVehicle";

export interface ReportsRepository {
  getReportJourneyVehicle: (
    vehicleId: number,
    stops: number,
    from: string,
    to: string,
  ) => Promise<ReportJourneyVehicle[]>;
  getReportGraphSensors: (
    vehicleId: number,
    stops: number,
    from: string,
    to: string,
  ) => Promise<GraphSensor[]>;
}
