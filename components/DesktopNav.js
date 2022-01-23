import AnnouncementBar from "./AnnouncementBar";
function DesktopNav() {
  return (
    <>
      <nav className="w-full bg-white hidden lg:block">
        <AnnouncementBar />
        <div className="flex justify-between items-center p-5 border-b-2 lg:w-11/12 2xl:w-10/12 lg:my-0 lg:mx-auto lg:border-0">
          <div className="flex">
            <ul className="flex">
              <li className="text-sm uppercase font-bold mr-10 cursor-pointer hover:text-sheertex-green transition-all">
                Tights
              </li>
              <li className=" text-sm uppercase font-bold mr-10 cursor-pointer hover:text-sheertex-green transition-all">
                Stockings
              </li>
              <li className=" text-sm uppercase font-bold cursor-pointer hover:text-sheertex-green transition-all">
                Socks & Accesories
              </li>
            </ul>
          </div>
          <img src="/sheertex-logo.svg" alt="Sheertex logo" />
          <div className="flex lg:items-center lg:justify-between ">
            <>
              <ul className="flex mr-16 text-lg">
                <li className="mr-5 cursor-pointer hover:text-sheertex-green transition-all">
                  Our Knit
                </li>
                <li className=" cursor-pointer hover:text-sheertex-green transition-all">
                  Our Story
                </li>
              </ul>
              <div className="flex items-center  justify-between mr-10">
                <img
                  src="/search-icon.svg"
                  alt=""
                  className="w-6 mt-1 lg:mt-0 lg:mr-4 cursor-pointer"
                />
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
              <select name="lang" className="">
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DesktopNav;
