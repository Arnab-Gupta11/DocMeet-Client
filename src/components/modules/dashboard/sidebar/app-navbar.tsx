"use client";
import { ThemeToggler } from "@/components/shared/ThemeToggler";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { RiLogoutCircleRLine } from "react-icons/ri";

const AppNavbar = () => {
  const { open } = useSidebar();
  return (
    <header
      className={cn(
        {
          "lg:ml-2 lg:mr-5 lg:mt-4 lg:rounded-xl transition-transform duration-300": open,
        },
        "bg-secondary-bg-light-2 dark:bg-secondary-bg-dark-2 flex h-16 shrink-0 items-center justify-between gap-2 px-4  border-2 border-sky-100 dark:border-dark-primary-border sticky top-0 z-10"
      )}
    >
      <div className="flex items-center gap-3">
        <span className="bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 cursor-pointer border-none w-9 h-9 flex items-center justify-center rounded-full hover:shadow-sm hover:shadow-blue-500">
          <SidebarTrigger />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href={"/"}
          className="bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 cursor-pointer border-none w-9 h-9 flex items-center justify-center rounded-full hover:shadow-sm hover:shadow-blue-500"
        >
          <HiOutlineHome />
        </Link>
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <ThemeToggler />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <Button
          variant={"outline"}
          className="bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 cursor-pointer border-none w-9 h-9 flex items-center justify-center rounded-full hover:text-red-500"
        >
          <RiLogoutCircleRLine />
        </Button>
      </div>
    </header>
  );
};

export default AppNavbar;
