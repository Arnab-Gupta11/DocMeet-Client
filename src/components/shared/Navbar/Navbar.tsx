"use client";

import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import Container from "../Container";
import { ThemeToggler } from "../ThemeToggler";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useCurrenUser from "@/hooks/useCurrenUser";
import ProfileAvatar from "./ProfileAvatar";
import { useEffect, useState } from "react";
import NavSidebar from "./NavSidebar";

//Navbar items.
const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Doctors",
    path: "/doctors",
  },
  {
    label: "Blogs",
    path: "/blogs",
  },
  {
    label: "About",
    path: "/about-us",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "FAQ",
    path: "/faq",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useCurrenUser();
  const [scrolled, setScrolled] = useState(false);

  const handleNavbarScrollEffect = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNavbarScrollEffect);
  }, [scrolled]);

  return (
    <div className={`${scrolled && "shadow-md shadow-sky-100 dark:shadow-secondary-bg-dark-2"} bg-white dark:bg-black sticky top-0 z-10`}>
      <Container className="flex items-center justify-between h-20">
        {/* Logo */}
        <div>
          <Logo width={40} height={40} className="text-2xl hidden sm:block" />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 px-5 py-1.5 rounded-full">
          {menuItems.map((item) => {
            return (
              <Link
                key={item.label}
                href={item.path}
                className={`${
                  pathname === item.path ? "text-primary" : "text-primary-text-light dark:text-primary-text-dark"
                } font-semibold text-base`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-5">
          <ThemeToggler />
          {user && <ProfileAvatar />}
          {!user && (
            <div className="flex gap-2">
              <Button variant="outline" className="bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 border-none">
                <Link href="/login">Login</Link>
              </Button>
              <Button>
                <Link href="/register">Create Your Account</Link>
              </Button>
            </div>
          )}
          <NavSidebar pathname={pathname} menuItems={menuItems} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
