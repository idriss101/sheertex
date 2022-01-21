import React from "react";
import CartIcon from "./CartIcon";
import HamburgerIcon from "./HamburgerIcon";
import SearchIcon from "./SearchIcon";
import SheertexIcon from "./SheertexIcon";
import AnnouncementBar from "./AnnouncementBar";
import AccountIcon from "./AccountIcon";

function NavBar() {
  return (
    <>
      <nav className="fixed w-full bg-white">
        <AnnouncementBar />
        <div className="flex justify-between items-center p-5 border-b-2">
          <div className="flex">
            <HamburgerIcon />
            <SearchIcon />
          </div>
          <SheertexIcon />
          <div className="flex">
            <CartIcon />
            <AccountIcon />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
