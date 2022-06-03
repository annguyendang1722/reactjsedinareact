import Head from "next/head";
import Banner from "../templates/components/banner";
import { Home } from "../api-data/pages/home";

export default function Components() {
    console.log(Home);

    return (
        <div className="site">
            <Head>
                <title>Sentius Digital Styleguide</title>
                <meta name="description" content="Sentius Digital Styleguide" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <Banner data={Home[0].banner} />
            </main>
        </div>
    );
}
