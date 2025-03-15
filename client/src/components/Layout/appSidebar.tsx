import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Page, routes } from "@/router/routes";
import { ModeToggle } from "../ModeToggle";
import { Separator } from "@/components/ui/separator";

export function AppSidebar() {
  return (
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup className="sidebar-menu-right">
          <SidebarGroupLabel>תפריט</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="sidebar-menu-right">
              {routes.map((route: Page) => (
                <SidebarMenuItem key={route.name}>
                  <SidebarMenuButton asChild>
                    <a href={route.path}>
                      {route.icon}
                      <span>{route.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ModeToggle at the bottom */}
      <SidebarFooter className="sidebar-menu-right">
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
