import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-24 w-full rounded-xl focus:border tracking-wider border-2 border-indigo-100 dark:border-dark-primary-border px-3 py-1.5 bg-slate-50 dark:bg-secondary-bg-dark-2 text-primary-text-light dark:text-primary-text-dark transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-slate-500 placeholder:text-[12px] sm:placeholder:text-[14px] dark:placeholder:text-slate-400  disabled:cursor-not-allowed disabled:opacity-50 text-sm md:text-base font-medium focus-visible:shadow-sm focus-visible:shadow-blue-400 dark:focus-visible:shadow-sky-900 focus-within:outline-2 focus-within:outline-sky-300  dark:focus-within:outline-sky-900",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
