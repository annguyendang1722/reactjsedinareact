import Head from "next/head";
import Banner from "../templates/components/banner";
import { dataBanner, dataBanner2 } from "../api-data/components/banner";

export default function Components() {
    return (
        <div className="site">
            <Head>
                <title>Sentius Digital Styleguide</title>
                <meta name="description" content="Sentius Digital Styleguide" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <Banner data={dataBanner} />
                <Banner data={dataBanner2} />
            </main>
        </div>
    );
}
