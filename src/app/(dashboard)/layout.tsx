import type { PropsWithChildren } from "react";

import SideBarMenu from "#/components/dashboard-layout/SideBarMenu";
import Header from "#/components/dashboard-layout/StickyHeader";
import { UserStoreProvider } from "#/modules/user/application/context/UserProvider";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <SideBarMenu />
      <div className="flex flex-col flex-grow">
        <UserStoreProvider>
          <Header />
          {children}
        </UserStoreProvider>
      </div>
    </div>
  );
};

export default DashboardLayout;
