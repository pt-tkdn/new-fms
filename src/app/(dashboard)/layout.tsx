import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import SideBarMenu from "#/components/dashboard-layout/SideBarMenu";

const Header = dynamic(
  () => import("#/components/dashboard-layout/StickyHeader"),
  {
    ssr: false,
  }
);

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <SideBarMenu />
      <div className="flex flex-col flex-grow">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
