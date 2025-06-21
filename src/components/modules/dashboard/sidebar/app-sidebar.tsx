"use client";
import * as React from "react";
import { LayoutDashboard, CalendarClock, CalendarRange, UserCircle, FileText, Settings, Icon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Logo from "@/components/shared/Logo";
import Link from "next/link";
import Image from "next/image";

import maleAvatar from "@/assets/maleAvatar.webp";
// import femaleAvatar from "@/assets/femaleDoctorAvatar.webp";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Overview",
      path: "/dashboard/doctors/overview",
      Icon: LayoutDashboard,
    },
    {
      title: "Appointments",
      path: "/dashboard/doctors/appointments",
      Icon: CalendarClock,
    },
    {
      title: "Schedule",
      path: "/dashboard/doctors/schedule",
      Icon: CalendarRange,
    },
    {
      title: "Profile",
      path: "/dashboard/doctors/profile",
      Icon: UserCircle,
    },
    {
      title: "Blogs",
      path: "/dashboard/doctors/blogs",
      Icon: FileText,
    },
    {
      title: "Settings",
      path: "/dashboard/doctors/settings",
      Icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Logo width={35} height={35} className="text-xl xsm:text-3xl" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <div className="my-5 w-full h-64 bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-2 rounded-xl p-2">
              <Image src={maleAvatar} width={400} alt="profile image" className="w-full h-full object-cover rounded-xl" />
            </div>
            <Button className="w-full rounded-xl">Verify Account</Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="pb-8">
        <SidebarGroup>
          <SidebarMenu className="gap-2.5">
            {data.navMain.map((item) => {
              const { Icon, title, path } = item;
              return (
                <SidebarMenuSubItem key={title}>
                  <SidebarMenuSubButton asChild>
                    <Link
                      href={path}
                      className={` ${
                        path === pathname ? "bg-secondary-bg-light-1 dark:bg-slate-800/25 py-3 text-primary border-r-4 border-primary" : "py-3"
                      } flex items-center gap-1.5 hover:text-primary dark:hover:text-primary`}
                    >
                      <Icon />
                      <span className="text-lg font-medium">{title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
