"use client";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import Container from "../Container";
import { ThemeToggler } from "../ThemeToggler";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className=" bg-white dark:bg-black">
      <Container className="flex items-center justify-between h-20">
        {/* logo  */}
        <div>
          <Logo width={40} height={40} />
        </div>
        {/* NavItem  */}
        <div className="hidden lg:flex items-center gap-7 bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 px-5 py-1.5 rounded-full">
          <Link href={"/"}>
            <span className={`${pathname === "/" ? "text-primary" : "text-primary-text-light dark:text-primary-text-dark"} font-semibold text-base `}>
              Home
            </span>
          </Link>
          <span>About</span>
          <span>Contact Us</span>
          <span>Doctors</span>
        </div>
        {/* action btn  */}
        <div className="flex items-center gap-5">
          <ThemeToggler />
          <Button variant={"outline"} className="bg-secondary-bg-light-1 dark:bg-secondary-bg-dark-1 border-none">
            Login
          </Button>
          <Button>
            <Link href={"/auth/register"}>Create Your Account</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
