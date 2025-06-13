import Navbar from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default CommonLayout;
