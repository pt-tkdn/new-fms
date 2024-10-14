import { Vehicle } from "#/modules/assets/domain/entities/vehicle";
import { Chip } from "#/shared/components/ui/chip";
import { Skeleton } from "#/shared/components/ui/skeleton";

interface ShownVehiclesProps {
  vehicles: Vehicle[];
  isLoading: boolean;
  selectedVehicles: Record<string, boolean>;
  onSelected: (vehicle: Vehicle) => void;
}

const ShownVehicles: React.FC<ShownVehiclesProps> = ({
  vehicles,
  isLoading,
  selectedVehicles,
  onSelected,
}) => {
  return (
    <div className="flex flex-1 flex-grow flex-row flex-wrap gap-2">
      {isLoading &&
        Array.from({ length: 5 }, (_, i) => i).map((_, index) => (
          <Skeleton key={index} className="w-20 h-10" />
        ))}
      {vehicles.map((item) => (
        <Chip
          key={item.id}
          onClick={() => onSelected(item)}
          className={
            selectedVehicles[item.id]
              ? "bg-primary/30 hover:bg-primary/20 border-primary/80"
              : "border-primary/80"
          }
        >
          <span className="font-semibold text-primary">{item.vehicleNo}</span>
        </Chip>
      ))}
    </div>
  );
};

export default ShownVehicles;
