"use client";

import ReportJourneyVehicleSummary from "#/modules/reports/presentation/ReportJourneyVehicleForm/ReportJourneyVehicleSummary";

import ReportJourneyVehicleForm from "./ReportJourneyVehicleForm";
import ReportJourneyVehicleTable from "./ReportJourneyVehicleTable";

const ReportJourneyVehicle = () => {
  return (
    <>
      <ReportJourneyVehicleForm />
      <ReportJourneyVehicleSummary />
      <ReportJourneyVehicleTable />
    </>
  );
};
export default ReportJourneyVehicle;
