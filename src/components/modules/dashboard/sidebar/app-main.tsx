"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const AppMain = ({ children }: { children: ReactNode }) => {
  const { open } = useSidebar();
  return (
    <div
      className={cn(
        {
          "py-5 px-3 sm:px-7 md:px-10": !open,
          "lg:pl-2 lg:pr-5 lg:py-5": open,
        },
        "min-h-screen px-3 py-5  sm:px-7 md:px-10 "
      )}
    >
      {children}
    </div>
  );
};

export default AppMain;
