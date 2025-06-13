import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import Container from "../Container";

const Navbar = () => {
  return (
    <div className=" bg-white dark:bg-black">
      <Container className="flex items-center justify-between h-20">
        {/* logo  */}
        <div>
          <Logo width={40} height={40} />
        </div>
        {/* NavItem  */}
        <div className="hidden lg:flex items-center gap-7">
          <span>Home</span>
          <span>About</span>
          <span>Contact Us</span>
          <span>Doctors</span>
        </div>
        {/* action btn  */}
        <div className="flex items-center gap-5">
          <Button>SignUp</Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
