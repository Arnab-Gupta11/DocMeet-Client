import AppMain from "@/components/modules/dashboard/sidebar/app-main";
import AppNavbar from "@/components/modules/dashboard/sidebar/app-navbar";
import { AppSidebar } from "@/components/modules/dashboard/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <AppNavbar />
        <AppMain>{children}</AppMain>
      </SidebarInset>
    </SidebarProvider>
  );
}
