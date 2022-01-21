import React from "react";
import CartIcon from "./CartIcon";
import HamburgerIcon from "./HamburgerIcon";
import SearchIcon from "./SearchIcon";
import SheertexIcon from "./SheertexIcon";
import AnnouncementBar from "./AnnouncementBar";
import AccountIcon from "./AccountIcon";
function MobileNav() {
  return (
    <div>
      <nav className="fixed w-full bg-white lg:hidden xl:hidden 2xl:hidden">
        <AnnouncementBar />
        <div className="flex justify-between items-center p-5 border-b-2 lg:">
          <div className="flex">
            <HamburgerIcon />
            <SearchIcon />
          </div>
          <SheertexIcon />
          <div className="flex lg:items-center lg:justify-between lg:w-80">
            <CartIcon />
            <AccountIcon />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MobileNav;
