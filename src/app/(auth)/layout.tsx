import Image from "next/image";
import type { PropsWithChildren } from "react";

import { illustrationPaths } from "#/shared/assets/illustration_paths";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row h-screen overflow-auto">
      <div className="hidden sticky lg:flex top-0 w-[50vw] left-0 h-screen">
        <Image
          className="w-full object-cover"
          src={illustrationPaths.mainIllustration}
          alt="tag"
        />
        <div className="absolute left-[60px] top-[100px] space-y-2">
          <span className="inline-block text-white font-bold text-4xl bg-primary px-5 py-3 rounded-md">
            Solusi Sistem Tracking
          </span>
          <span className="inline-block text-white font-bold text-4xl bg-primary px-5 py-3 rounded-md">
            dan Keamanan Kendaraan Anda
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
