import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import banner from "@/assets/banner2.png";
const HomePage = () => {
  return (
    <div className="overflow-hidden ">
      <div className=" bg-white dark:bg-black ">
        <div className="relative w-full z-0 ">
          {/* Background Grid  */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 top-0
                      bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)]
                      dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]
                      [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"
          />
          {/* Banner Details  */}
          <div className="relative container mx-auto px-4 md:px-0 z-10 h-full flex flex-col lg:flex-row items-center justify-between ">
            {/* Banner Info  */}
            <div className="space-y-8 pt-10 pb-5 lg:pt-20 lg:pb-28 w-full lg:w-1/2 text-center lg:text-left ">
              <Badge
                variant="outline"
                className="font-semibold dark:bg-[#091E39] border-2 dark:border-[#014894] bg-[#d6ddff] border-blue-400 px-2.5 py-1 sm:px-4 sm:py-1.5 text-blue-800 dark:text-white text-xs md:text-sm rounded-xl"
              >
                Healthcare made simple
              </Badge>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text-light dark:text-primary-text-dark leading-tight">
                Book <span className="font-extrabold gradient-text">Appointments</span> with Trusted{" "}
                <span className="font-extrabold gradient-text">Doctors</span>
                <br />
                <span className="font-extrabold gradient-text">anytime, anywhere</span>
              </h1>
              <p className="text-secondary-text-light dark:text-secondary-text-dark font-medium text-sm sm:text-lg md:text-xl">
                Book appointments, consult via video, and manage your healthcare journey all in one secure platform.
              </p>
              <div className="flex flex-row gap-4 items-center justify-center lg:justify-start">
                <Link href="/" className="">
                  <Button className=" sm:px-8 sm:py-3 flex items-center gap-1.5 text-xs sm:text-lg">
                    <span>Get Started</span>
                    <ArrowRight className="" />
                  </Button>
                </Link>
                <Button asChild variant="outline" className=" sm:px-8 sm:py-3 flex items-center gap-1.5 text-xs sm:text-lg">
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>
            {/* Banner Image */}
            <div className="w-full lg:w-1/2 h-full relative lg:absolute lg:right-0 lg:bottom-0">
              <Image src={banner} alt="Doctor consultation" priority className="xl:object-fill  rounded-xl  w-full mt-5 lg:mt-28 xl:mt-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-28">Heloo boss</div>
    </div>
  );
};

export default HomePage;
