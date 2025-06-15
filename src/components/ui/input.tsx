import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12  w-full rounded-xl focus:border tracking-wider border-2 border-indigo-100 dark:border-dark-primary-border px-3 py-1.5 bg-slate-50 dark:bg-secondary-bg-dark-2 text-light-secondary-text dark:text-dark-secondary-txt transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-sm md:text-base font-medium focus-visible:shadow-sm focus-visible:shadow-blue-400 dark:focus-visible:shadow-sky-900 focus-within:outline-2 focus-within:outline-sky-300  dark:focus-within:outline-sky-900",
        className
      )}
      {...props}
    />
  );
}

export { Input };
