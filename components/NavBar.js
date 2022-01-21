import React from "react";
import CartIcon from "./CartIcon";
import HamburgerIcon from "./HamburgerIcon";
import SearchIcon from "./SearchIcon";
import SheertexIcon from "./SheertexIcon";
import AnnouncementBar from "./AnnouncementBar";
import AccountIcon from "./AccountIcon";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function NavBar() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}

export default NavBar;
