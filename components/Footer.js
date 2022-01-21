import Newsletter from "../components/Newsletter";
import FooterBlock from "./FooterBlock";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import FooterImage from "./FooterImage";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

function Footer() {
  return (
    <>
      <MobileFooter />
      <DesktopFooter />
    </>
  );
}

export default Footer;
