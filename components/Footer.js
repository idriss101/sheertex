import Newsletter from "../components/Newsletter";
import FooterBlock from "./FooterBlock";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import FooterImage from "./FooterImage";

function Footer() {
  return (
    <>
      <div className="">
        <Newsletter />
      </div>
      <footer className="flex flex-wrap justify-between px-10 py-5">
        <FooterBlock
          header="About"
          links={["Our Story", "Our knit", "reviews", "FAQ", "Careers"]}
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
        <div className="self-end">
          <p className="uppercase text-xs">Follow Us</p>
          <p className="flex">
            <FaInstagram className="mr-1" />
            <FaFacebookSquare />
          </p>
        </div>
        <FooterImage />
        <div className="block my-0 mx-auto">
          <p className="mt-5 text-xs text-center">
            &#169; 2021 Sheertex All Rights Reserved.
            <a className="uppercase underline">Terms </a>
            <a className="uppercase underline">Privacy</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
