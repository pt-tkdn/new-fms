import { Skeleton } from "#/shared/components/ui/skeleton";

const ProfileHeaderSkeleton: React.FC = () => {
  return (
    <div className="flex gap-x-5">
      <Skeleton className="w-10 h-10 rounded-full" />

      <div className="flex flex-col items-start">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-10 h-4" />
      </div>
    </div>
  );
};

export default ProfileHeaderSkeleton;
