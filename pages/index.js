import Head from "next/head";
import Footer from "../components/Footer";
import SellingPoints from "../components/SellingPoints";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sheertex</title>
        <meta name="description" content="Web Developer Sheertex Test" />
      </Head>
      <SellingPoints />
      <Footer />
    </div>
  );
}
