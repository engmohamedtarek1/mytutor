import { useState } from "react";

const NavbarMessage = () => {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <>
      {navOpen && (
        <div className="hidden bg-[#FFCF3A] p-1 text-center text-sm font-semibold lg:block">
          <span className="">
            Are you a university or school student for an online tutoring
            partnership?<span className="pl-2 text-[#0063FF]">Talk to us</span>
          </span>

          <span
            className="absolute right-10 cursor-pointer"
            onClick={() => setNavOpen(!open)}
          >
            X
          </span>
        </div>
      )}
    </>
  );
};

export default NavbarMessage;
