import Newsletter from "../components/Newsletter";
import FooterBlock from "./FooterBlock";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import FooterImage from "./FooterImage";
function DesktopFooter() {
  return (
    <>
      <div className="hidden lg:flex lg:items-center lg:p-10 w-4/6 my-0 mx-auto lg:justify-around">
        <Newsletter />
        <footer className="flex justify-between px-24 py-5 w-5/6">
          <FooterBlock
            header="About"
            links={["Our Story", "Our Knit", "Reviews", "FAQ", "Careers"]}
          />
          <FooterBlock
            header="Shop"
            links={["Home", "Shop All", "Gift Card", "Refer a Friend"]}
          />

          <div className="">
            <h5 className="text-2xl mb-4">Contact</h5>
            <ul>
              <li className="mb-3 text-sm">
                <p>7471 Avenue Leonard-De Vinci</p>
                <p>Montreal, QC H2A 2P3</p>
              </li>
              <li className="text-sm">
                <p>1 800-715-1658</p>
                <p>hello@sheertex.com</p>
              </li>
            </ul>
          </div>
        </footer>
        <FooterImage />
      </div>

      <div className=" hidden lg:flex w-full items-center my-0 mx-auto justify-around">
        <div className="">
          <p className="text-xs flex items-center">
            Select your currency
            <img
              src="/currency.svg"
              alt=""
              className="w-16 mt-1 cursor-pointer"
            />
          </p>
        </div>
        <div className="flex justify-around">
          <div className="mr-10">
            <p className=" text-xs text-center">
              &#169; 2021 Sheertex All Rights Reserved.
              <a className="uppercase underline">Terms </a>
              <a className="uppercase underline">Privacy</a>
            </p>
          </div>
          <p className="uppercase text-xs mr-3">Follow Us</p>
          <p className="flex">
            <FaInstagram className="mr-1" />
            <FaFacebookSquare />
          </p>
        </div>
      </div>
    </>
  );
}

export default DesktopFooter;
