import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'

const Index: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>gh-org-stats</title>
                <meta name={"description"} content={"GitHub Organization Stats"} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    gh-org-stats
                </h1>
                <p className={styles.description}>
                    GitHub Organization Stats
                </p>
            </main>

            <footer className={styles.footer}>
                <a href={"https://vercel.com"} target={"_blank"} rel={"noopener noreferrer"}>
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src={"/vercel.svg"} alt={"Vercel Logo"} width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
}

export default Index;
