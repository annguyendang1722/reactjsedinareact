import Head from "next/head";
import DataFarm from "../templates/components/data-farm";
import { Datafarm1, Datafarm2 } from "../api-data/components/data-farm";

export default function Datafarm() {
    return (
        <div className="site">
            <Head>
                <title>Sentius Digital Styleguide</title>
                <meta name="description" content="Sentius Digital Styleguide" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <DataFarm data={Datafarm1} />
                <DataFarm data={Datafarm2} />
            </main>
        </div>
    );
}
