import { illustrationPaths } from "#/shared/assets/illustration_paths";
import Image from "next/image";
import { PropsWithChildren } from "react";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="lg:ml-[50vw] flex flex-col sm:flex-row">
        <div className="hidden lg:flex flex-1 fixed w-[50vw] top-0 left-0">
          <Image
            className="w-full object-cover aspect-[0.72]"
            src={illustrationPaths.mainIllustration}
            alt="tag"
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
