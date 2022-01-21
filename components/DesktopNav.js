import CartIcon from "./CartIcon";
import HamburgerIcon from "./HamburgerIcon";
import SearchIcon from "./SearchIcon";
import SheertexIcon from "./SheertexIcon";
import AnnouncementBar from "./AnnouncementBar";
import AccountIcon from "./AccountIcon";
function DesktopNav() {
  return (
    <>
      <nav className="fixed w-full bg-white hidden lg:block">
        <AnnouncementBar />
        <div className="flex justify-between items-center p-5 border-b-2 lg:mx-10 lg:border-0">
          <div className="flex">
            <ul className="flex">
              <li className="text-sm uppercase font-bold mr-5">Tights</li>
              <li className=" text-sm uppercase font-bold mr-5">Stockings</li>
              <li className=" text-sm uppercase font-bold">
                Socks & Accesories
              </li>
            </ul>
          </div>
          <SheertexIcon />
          <div className="flex lg:items-center lg:justify-between ">
            <>
              <ul className="flex mr-10">
                <li className="mr-5">Our Knit</li>
                <li>Our Story</li>
              </ul>
              <div className="flex items-center  justify-between mr-5">
                <SearchIcon />
                <CartIcon />
                <AccountIcon />
              </div>
              <select name="lang">
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
