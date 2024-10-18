"use client";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useState } from "react";

import type { Vehicle } from "#/modules/assets/domain/entities/vehicle";

type VehicleState = Vehicle | null;

type VehicleActions = (Vehicle: Vehicle | null) => void;

const VehicleStateCtx = createContext<VehicleState | null>(null);
const VehicleActionsCtx = createContext<VehicleActions | null>(null);

const VehicleProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [Vehicle, setVehicle] = useState<Vehicle | null>(null);

  return (
    <VehicleStateCtx.Provider value={Vehicle}>
      <VehicleActionsCtx.Provider value={setVehicle}>
        {children}
      </VehicleActionsCtx.Provider>
    </VehicleStateCtx.Provider>
  );
};

export const useVehicleState = () => {
  const ctx = useContext(VehicleStateCtx);
  if (ctx === undefined) {
    throw new Error("useVehicleState must be used within VehicleProvider");
  }
  return ctx;
};

export const useVehicleActions = () => {
  const ctx = useContext(VehicleActionsCtx);
  if (!ctx) {
    throw new Error("useVehicleActions must be used within VehicleProvider");
  }
  return ctx;
};

export default VehicleProvider;
