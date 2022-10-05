import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TypeWriter from "../components/TypeWriter";
import {NextSeo} from "next-seo";

export default function Home() {
    return (
        <div className={styles.container}>
            <NextSeo
                title="Delicious"
                description="The adjective 'delicious' is used to describe a situation or activity that gives you great pleasure:"
                defaultTitle="Delicious"
                openGraph={{
                    url: "https://www.delicious.ee/",
                    title: "Delicious",
                    description:
                        "The adjective 'delicious' is used to describe a situation or activity that gives you great pleasure:"
                }}
                additionalMetaTags={[
                    {
                        property: "keywords",
                        content:
                            "delicious, meaning of delicious, delightful, delectable"
                    },
                ]}
            />
            <Head>
                <title>Delicious</title>
                <meta name="Delicious" content="The meaning of delicious"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <TypeWriter/>
            </main>
        </div>
    )
}
