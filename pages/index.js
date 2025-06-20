import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TypeWriter from "../components/TypeWriter";
import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <>
            <NextSeo
                title="delicious.ee - The meaning of delicious"
                description="Welcome to delicious.ee - delicious, delicieux, from Late Latin dēliciōsus. A minimalistic mantra for daily delight."
                defaultTitle="delicious.ee"
                canonical="https://www.delicious.ee/"
                openGraph={{
                    url: "https://www.delicious.ee/",
                    title: "delicious.ee - The meaning of delicious",
                    description:
                        "Welcome to delicious.ee - delicious, delicieux, from Late Latin dēliciōsus. A minimalistic mantra for daily delight.",
                    images: [
                        {
                            url: "https://www.delicious.ee/og-image.jpg",
                            width: 1200,
                            height: 630,
                            alt: "delicious.ee banner",
                        },
                    ],
                }}
                twitter={{
                    cardType: "summary_large_image",
                }}
                additionalMetaTags={[
                    {
                        property: "keywords",
                        content:
                            "mantra, minimalism, delicious, meaning of delicious, delightful, delectable, life, delicious, delicieux, dēliciōsus, frohling.se"
                    },
                    {
                        name: "author",
                        content: "frohling.se"
                    }
                ]}
            />

            <Head>
                <title>delicious.ee - The meaning of delicious</title>
                <meta
                    name="description"
                    content="A minimalistic mantra. The adjective 'delicious' is used to describe a situation or activity that gives you great pleasure."
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.delicious.ee/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "url": "https://www.delicious.ee/",
                            "name": "delicious.ee",
                            "description": "A minimalistic mantra. The adjective 'delicious' is used to describe a situation or activity that gives you great pleasure."
                        })
                    }}
                />
            </Head>

            <div className={styles.container}>
                <main className={styles.main}>
                    <TypeWriter />
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