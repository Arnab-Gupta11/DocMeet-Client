import logo from "@/assets/doc-meet-logo.png";
import Image from "next/image";
const Logo = ({ width = 60, height = 60 }: { width: number; height: number }) => {
  return (
    <div className="flex items-center gap-2 ">
      <Image src={logo} alt="logo" width={width} height={height} />
      <span className="text-4xl font-bold text-primary-text-light dark:text-primary-text-dark">DocMeet</span>
    </div>
  );
};

export default Logo;
