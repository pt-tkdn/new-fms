import { z } from "zod";

export const reportJourneyVehicle = z.object({
  status: z.number(),
  start: z.string(),
  end: z.string(),
  distance: z.string(),
  topSpeed: z.string(),
  averageSpeed: z.string(),
  stopDuration: z.string(),
  driveDuration: z.string(),
  duration: z.string(),
  fuelConsumptionGps: z.string(),
  fuelPriceGps: z.string(),
  startLocation: z.string(),
  endLocation: z.string(),
});

type RawReportJourneyVehicle = z.infer<typeof reportJourneyVehicle>;

export const createReportJourneyVehicle = (data: RawReportJourneyVehicle) => {
  return reportJourneyVehicle.parse(data);
};

export type ReportJourneyVehicle = ReturnType<
  typeof createReportJourneyVehicle
>;

export const reportJourneyVehicleValidation = z.object({
  vehicleId: z.number().min(1),
  stops: z.number(),
  from: z.date(),
  to: z.date(),
});

export type ReportJourneyVehicleValidation = z.infer<
  typeof reportJourneyVehicleValidation
>;
