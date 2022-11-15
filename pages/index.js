import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TypeWriter from "../components/TypeWriter";
import {NextSeo} from "next-seo";

export default function Home() {
    return (
        <>
            <NextSeo
                title="delicious.ee"
                description="Welocme to delicious.ee - a minimalistic mantra. Old French delicious, delicieux, from Late Latin dēliciōsus "
                defaultTitle="delicious.ee"
                openGraph={{
                    url: "https://www.delicious.ee/",
                    title: "delicious.ee",
                    description:
                        "Welocme to delicious.ee - a minimalistic mantra. Old French delicious, delicieux, from Late Latin dēliciōsus "
                }}
                additionalMetaTags={[
                    {
                        property: "keywords",
                        content:
                            "mantra, minimalism, delicious, meaning of delicious, delightful, delectable, life, delicious, delicieux, dēliciōsus, frohling.se"
                    },
                ]}
            />

            <Head>
                <title>delicious</title>
                <meta name="delicious.ee"
                      content="The meaning of delicious. A minimalistic daily mantra."
                      description="A minimalistic mantra. The adjective 'delicious' is used to describe a situation or activity that gives you great pleasure:"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.container}>
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
        </>

    )
}
