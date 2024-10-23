"use client";

import { useReportGraphSensors } from "#/modules/reports/application/hooks/useReportGraphSensors";
import { useReportJourneyVehicle } from "#/modules/reports/application/hooks/useReportJourneyVehicle";
import GraphCharts from "#/modules/reports/presentation/ReportGraphSensors/GraphCharts";
import ReportJourneyVehicleForm from "#/modules/reports/presentation/ReportJourneyVehicle/ReportJourneyVehicleForm";
import ReportJourneyVehicleSummary from "#/modules/reports/presentation/ReportJourneyVehicle/ReportJourneyVehicleSummary";

const ReportGraphSensors: React.FC = () => {
  const { fetch } = useReportJourneyVehicle();
  const { fetch: fetchGraphSensors } = useReportGraphSensors();
  return (
    <>
      <ReportJourneyVehicleForm
        onSubmit={(value) => {
          fetch(value);
          fetchGraphSensors(value);
        }}
      />
      <ReportJourneyVehicleSummary />
      <GraphCharts />
    </>
  );
};

export default ReportGraphSensors;
