"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Logo from "../Logo";
import Link from "next/link";
import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type TNavSidebarProps = {
  pathname: string;
  menuItems: {
    label: string;
    path: string;
  }[];
};

const NavSidebar = ({ pathname, menuItems }: TNavSidebarProps) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <Button
          onClick={() => setSheetOpen(true)}
          variant="outline"
          size="icon"
          className="shadow-none hover:bg-none
              focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0
              ring-0 outline-none bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 cursor-pointer border-none"
        >
          <RiMenu5Fill />
        </Button>
        <SheetContent>
          <SheetHeader className="mt-8">
            <SheetTitle className="hidden">DocMeet</SheetTitle>
            <Logo width={40} height={40} />
          </SheetHeader>
          <div className="flex flex-col gap-3 px-6">
            {menuItems.map((item) => {
              return (
                <Link
                  onClick={() => setSheetOpen(false)}
                  key={item.label}
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? "text-primary bg-sky-50 dark:bg-secondary-bg-dark-2 px-2 py-1 rounded-lg"
                      : "text-primary-text-light dark:text-primary-text-dark pl-2"
                  } font-semibold text-lg`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavSidebar;
