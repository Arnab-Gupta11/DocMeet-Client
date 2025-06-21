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
          "py-5 px-3 md:px-10": !open,
          "pl-3 pr-5 py-5": open,
        },
        "min-h-screen"
      )}
    >
      {children}
    </div>
  );
};

export default AppMain;
