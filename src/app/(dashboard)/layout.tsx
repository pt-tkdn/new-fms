import Header from "#/components/dashboard-layout/StickyHeader";
import SideBarMenu from "#/components/dashboard-layout/SideBarMenu";
import { PropsWithChildren } from "react";

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
