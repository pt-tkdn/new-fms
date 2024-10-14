import { useUserSelector } from "#/modules/user/application/hooks/useUserStore";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "#/shared/components/ui/avatar";
import { Skeleton } from "#/shared/components/ui/skeleton";

const ProfileHeader: React.FC = () => {
  const { name, account } = useUserSelector((s) => ({
    name: s?.name,
    account: s?.account,
  }));

  // create initial name 2 character
  // ex: "John Doe" => "JD"
  // ex: "John" => "JO"
  // ex: "John Tan Doe" => "JD"

  const generateInitial = (name: string) => {
    if (name.includes(" ")) {
      const initial = name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("");

      return initial.toUpperCase();
    }

    return name.substring(0, 2).toUpperCase();
  };

  const initial = generateInitial(name ?? "");

  return (
    <button className="flex gap-x-5 items-center">
      <Avatar>
        <AvatarImage src={name} />
        <AvatarFallback>{initial}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-start justify-center">
        <span className="text-sm font-bold text-slate-800">{name}</span>
        {account && (
          <span className="text-xs font-normal text-slate-700">
            {account.name}
          </span>
        )}
      </div>
    </button>
  );
};

const ProfileHeaderSkeleton: React.FC = () => {
  return (
    <div className="flex gap-x-5">
      <Skeleton className="w-10 h-10 rounded-full" />

      <div className="flex flex-col items-start gap-y-2">
        <Skeleton className="w-16 h-4" />
        <Skeleton className="w-10 h-4" />
      </div>
    </div>
  );
};

export { ProfileHeader, ProfileHeaderSkeleton };
