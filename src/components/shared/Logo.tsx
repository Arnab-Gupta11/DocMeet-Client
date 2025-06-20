import logo from "@/assets/doc-meet-logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
const Logo = ({ width = 60, height = 60, className }: { width: number; height: number; className?: string }) => {
  return (
    <div className="flex items-center gap-2 ">
      <Image src={logo} alt="logo" width={width} height={height} />
      <span className={cn("text-4xl font-bold text-primary-text-light dark:text-primary-text-dark", className)}>DocMeet</span>
    </div>
  );
};

export default Logo;
