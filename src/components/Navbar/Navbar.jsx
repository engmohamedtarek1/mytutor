import { useState } from "react";
import { FaLaptop } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex w-full items-center justify-between px-5 py-6 lg:px-48">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-2xl">
          <FaLaptop className="text-[#0063ff]" />
          <span className="font-bold">E-Tutor</span>
        </div>
        {/* Components Section */}
        <div className="hidden gap-14 text-lg font-semibold text-[#4b5563] lg:flex">
          <a className="cursor-pointer hover:text-[#0063FF]">Home</a>
          <a className="cursor-pointer hover:text-[#0063FF]">For Students</a>
          <a className="cursor-pointer hover:text-[#0063FF]">Resources</a>
          <a className="cursor-pointer hover:text-[#0063FF]">About us</a>
          <a className="cursor-pointer hover:text-[#0063FF]">Contact us</a>
        </div>
        {/* Auth Section */}
        <div className="hidden gap-5 text-lg font-semibold lg:flex">
          <button>Sign in</button>
          <button className="rounded-full bg-[#0063FF] px-6 py-2 text-white">
            Register
          </button>
        </div>

        {/* Mobile Menu Section */}
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-4xl" />
        </div>

        {/* Mobile Sidebar Section */}
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
