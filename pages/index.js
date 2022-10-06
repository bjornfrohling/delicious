import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TypeWriter from "../components/TypeWriter";
import {NextSeo} from "next-seo";

export default function Home() {
    return (
        <div className={styles.container}>
            <NextSeo
                title="delicious"
                description="A minimalistic mantra. The adjective 'delicious' is used to describe a situation or activity that gives you great pleasure:"
                defaultTitle="delicious"
                openGraph={{
                    url: "https://www.delicious.ee/",
                    title: "delicious",
                    description:
                        "A minimalistic mantra. The adjective 'delicious' is used to describe a situation or activity that gives you great pleasure:"
                }}
                additionalMetaTags={[
                    {
                        property: "keywords",
                        content:
                            "mantra, minimalism, delicious, meaning of delicious, delightful, delectable, life"
                    },
                ]}
            />
            <Head>
                <title>delicious</title>
                <meta name="delicious" content="The meaning of delicious. A daily minimalistic mantra."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <TypeWriter/>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://frohling.se"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    designed by frohling.se
                </a>
            </footer>
        </div>
    )
}
