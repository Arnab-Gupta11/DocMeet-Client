"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shadow-none hover:bg-none
      focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0
      ring-0 outline-none bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 cursor-pointer border-none"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-black rounded-xl border-indigo-200 dark:border-dark-primary-border shadow-sm shadow-indigo-200 dark:shadow-indigo-950"
      >
        <DropdownMenuItem
          className="hover:text-primary font-medium cursor-pointer hover:bg-secondary-bg-light-1 hover:dark:bg-secondary-bg-dark-1 rounded-xl"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:text-primary font-medium cursor-pointer hover:bg-secondary-bg-light-1 hover:dark:bg-secondary-bg-dark-1 rounded-xl"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:text-primary font-medium cursor-pointer hover:bg-secondary-bg-light-1 hover:dark:bg-secondary-bg-dark-1 rounded-xl"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
