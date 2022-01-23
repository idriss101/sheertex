import AnnouncementBar from "./AnnouncementBar";
function MobileNav() {
  return (
    <div>
      <nav className="fixed w-full bg-white lg:hidden xl:hidden 2xl:hidden z-50">
        <AnnouncementBar />
        <div className="flex justify-between items-center p-5 border-b-2 lg:">
          <div className="flex">
            <img
              src="/hamburger-menu.svg"
              alt=""
              className="w-8 mt-2 mr-5 cursor-pointer"
            />
            <img
              src="/search-icon.svg"
              alt=""
              className="w-6 mt-1 lg:mt-0 lg:mr-4 cursor-pointer"
            />
          </div>
          <img
            src="/sheertex-logo.svg"
            alt="Sheertex logo"
            className="cursor-pointer"
          />
          <div className="flex lg:items-center lg:justify-between lg:w-80">
            <img
              src="/cart-icon.svg"
              alt="Cart icon"
              className="w-6 cursor-pointer"
            />
            <img
              src="/account-icon.svg"
              alt=""
              className="ml-5 lg:ml-4 cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MobileNav;
