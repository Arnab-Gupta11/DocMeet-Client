import { ReactNode } from "react";
import { TabsTrigger } from "../tabs";
import { cn } from "@/lib/utils";

const CustomTabTrigger = ({ children, className, value }: { children: ReactNode; className?: string; value: string }) => {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        "data-[state=active]:bg-gradient-to-b data-[state=active]:from-[#21339e] data-[state=active]:to-[#8fd0ff] data-[state=active]:border-none data-[state=active]:text-white rounded-lg sm:rounded-xl  dark:data-[state=active]:text-foreground bg-sky-100 border-2 border-sky-300 text-black dark:bg-slate-600/40 dark:text-white dark:border-slate-700 sm:py-4 sm:px-5 cursor-pointer flex items-center gap-1.5",
        className
      )}
    >
      {children}
    </TabsTrigger>
  );
};

export default CustomTabTrigger;
