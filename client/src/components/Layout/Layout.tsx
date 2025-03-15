import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Layout/appSidebar";
import { Separator } from "@/components/ui/separator";
import "./style.css";
import { useLocation } from "react-router-dom";
import { routes } from "@/router/routes";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const currentRoute = routes.find(
    (route: Page) => route.path === location.pathname
  );

  return (
    <div>
      <SidebarProvider>
        <main>
          <div className="layout-container">
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>שכ"ב</div>
              <Separator orientation="vertical" />
              <div>קורס תכנות</div>
              <Separator orientation="vertical" />
              <div>ישי ביטון</div>
            </div>
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>{currentRoute?.name}</div>
              <Separator orientation="vertical" />
              <SidebarTrigger />
            </div>
          </div>
          <Separator />
          {children}
        </main>
        <AppSidebar />
      </SidebarProvider>
    </div>
  );
};
