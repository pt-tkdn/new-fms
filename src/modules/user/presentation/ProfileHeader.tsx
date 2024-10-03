import { useUserSelector } from "#/modules/user/application/hooks/useUserStore";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "#/shared/components/ui/avatar";

const ProfileHeader: React.FC = () => {
  const { name, status } = useUserSelector((s) => ({
    name: s.name,
    status: s.status,
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
        .join("");

      return initial.toUpperCase();
    }

    return name.substring(0, 2).toUpperCase();
  };

  const initial = generateInitial(name);

  return (
    <button className="flex gap-x-5">
      <Avatar>
        <AvatarImage src={name} />
        <AvatarFallback>{initial}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-start">
        <span className="text-sm font-bold text-slate-800">{name}</span>
        <span className="text-xs font-normal text-slate-700">{status}</span>
      </div>
    </button>
  );
};

export default ProfileHeader;
