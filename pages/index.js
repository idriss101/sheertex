import Head from "next/head";
import Newsletter from "../components/Newsletter";
import SellingPoints from "../components/SellingPoints";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sheertex</title>
        <meta name="description" content="Web Developer Sheertex Test" />
      </Head>
      <SellingPoints />
      <Newsletter />
    </div>
  );
}
