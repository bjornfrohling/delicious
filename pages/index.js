import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TypeWriter from "../components/TypeWriter";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delicious</title>
        <meta name="Delicious" content="Welcome to a delicious Life!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TypeWriter/>
      </main>
    </div>
  )
}
