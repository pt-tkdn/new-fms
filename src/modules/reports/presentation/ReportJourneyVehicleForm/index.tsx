"use client";

import { useVehicleState } from "#/modules/assets/application/context/VehicleProvider";
import { useAccountState } from "#/modules/user/application/context/AccountProvider";

import ReportJourneyVehicleForm from "./ReportJourneyVehicleForm";
import ReportJourneyVehicleTable from "./ReportJourneyVehicleTable";

const ReportJourneyVehicle = () => {
  const account = useAccountState();
  const vehicle = useVehicleState();

  console.log({ account, vehicle });

  return (
    <>
      <ReportJourneyVehicleForm />
      <ReportJourneyVehicleTable />
    </>
  );
};
export default ReportJourneyVehicle;
