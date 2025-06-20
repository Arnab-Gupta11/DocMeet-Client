"use client";

import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import Container from "../Container";
import { ThemeToggler } from "../ThemeToggler";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCurrenUser from "@/hooks/useCurrenUser";
import { useEffect, useState } from "react";
import { getLoginDoctorVerificationStatus } from "@/services/doctor";
import ProfileAvatar from "./ProfileAvatar";

const Navbar = () => {
  const pathname = usePathname();
  const { user, loading } = useCurrenUser();
  const [doctorVerficationStatus, setDoctorVerificationStatus] = useState<"draft" | "pending" | "approved" | "rejected" | null>(null);

  // Fetch doctor verification status if user is a doctor
  const handleDoctorVerificaionStatus = async () => {
    if (!user || user?.role === "ADMIN" || user?.role === "PATIENT") return;

    const result = await getLoginDoctorVerificationStatus(user._id);
    if (result?.success) {
      setDoctorVerificationStatus(result.data.verificationStatus);
    }
  };

  useEffect(() => {
    handleDoctorVerificaionStatus();
  }, [user]);

  // 🛡️ Prevent hydration mismatch: wait until user loading is complete

  return (
    <div className="bg-white dark:bg-black">
      <Container className="flex items-center justify-between h-20">
        {/* Logo */}
        <div>
          <Logo width={40} height={40} />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 px-5 py-1.5 rounded-full">
          <Link
            href="/"
            className={`${pathname === "/" ? "text-primary" : "text-primary-text-light dark:text-primary-text-dark"} font-semibold text-base`}
          >
            Home
          </Link>
          <Link href="/about" className="text-primary-text-light dark:text-primary-text-dark font-semibold text-base">
            About
          </Link>
          <Link href="/contact" className="text-primary-text-light dark:text-primary-text-dark font-semibold text-base">
            Contact Us
          </Link>
          <Link
            href="/doctors"
            className={`${pathname === "/doctors" ? "text-primary" : "text-primary-text-light dark:text-primary-text-dark"} font-semibold text-base`}
          >
            Doctors
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-5">
          <ThemeToggler />
          {loading && <>hello</>}
          {user ? (
            <ProfileAvatar />
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" className="bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 border-none">
                <Link href="/login">Login</Link>
              </Button>
              <Button>
                <Link href="/register">Create Your Account</Link>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
