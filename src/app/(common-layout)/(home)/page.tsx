import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import banner from "@/assets/banner.png";
import { ThemeToggler } from "@/components/shared/ThemeToggler";
const HomePage = () => {
  return (
    <div className="overflow-hidden ">
      <div className="lg:h-[300px] bg-white dark:bg-black ">
        <div className="relative w-full pt-10 z-0 ">
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 top-0
    bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)]
    dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
    bg-[size:14px_24px]
    [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"
          />
          <div className="relative container mx-auto px-4 md:px-0 z-10 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between relative border-4">
              <div className="space-y-8">
                <Badge variant="outline" className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium">
                  Healthcare made simple
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text-light dark:text-primary-text-dark leading-tight">
                  Connect with doctors <br />
                  <span className="gradient-title">anytime, anywhere</span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                  Book appointments, consult via video, and manage your healthcare journey all in one secure platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
                    <Link href="/onboarding">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-emerald-700/30 hover:bg-muted/80">
                    <Link href="/doctors">Find Doctors</Link>
                  </Button>
                  <ThemeToggler />
                </div>
              </div>

              <div className="rounded-xl border-4">
                <Image src={banner} alt="Doctor consultation" priority className="object-cover  rounded-xl w-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-28">Heloo boss</div>
    </div>
  );
};

export default HomePage;
