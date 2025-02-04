import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { FloatingNav } from "./ui/FloatingNav";
import { navItems } from "@/data";

const Navbar = () => {
  return (
    <div className="flex justify-end relative">
      <FloatingNav navItems={navItems} />
      {/* <div className="absolute left-1 top-28 z-40"> */}
        {/* <SocialMediaLinks /> */}
        {/* ADD EN/FR & DARKMODE */}
      {/* </div> */}
    </div>
  );
};

export default Navbar;
