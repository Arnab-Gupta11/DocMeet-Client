"use client";
import { ThemeToggler } from "@/components/shared/ThemeToggler";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const AppNavbar = () => {
   const { open } = useSidebar();
  return (
    <header
      className={cn(
        {
          "lg:ml-2 lg:mr-5 lg:mt-4 lg:rounded-xl transition-transform duration-300": open,
        },
        "bg-secondary-bg-light-2 dark:bg-secondary-bg-dark-2 flex h-16 shrink-0 items-center gap-2 px-4  border-2 border-sky-100 dark:border-dark-primary-border sticky top-0 z-10"
      )}
    >
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
      <ThemeToggler />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage className="">Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};

export default AppNavbar;
