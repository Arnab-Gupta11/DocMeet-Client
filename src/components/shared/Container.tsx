import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn("container mx-auto px-2.5 xm:px-5 xl:px-0", className)}>{children}</div>;
};

export default Container;
