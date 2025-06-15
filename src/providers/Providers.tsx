"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Toaster
        position="top-right"
        expand={false}
        toastOptions={{
          // Default options for all toasts
          style: {
            background: "var(--toast-background)",
            color: "var(--toast-foreground)",
            border: "1px solid var(--toast-border)",
            borderRadius: "14px",
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
