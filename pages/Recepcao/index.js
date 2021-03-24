import Head from "next/head";
import styles from "../../styles/Recepcao.module.css";

export default function Recepcao() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <main className={styles.section}>
          <h1 className={styles.title}>Acessar Página de Destino</h1>
          <form>
            <button className="button" type="submit">
              Click Me
            </button>
          </form>
        </main>
      </div>
      <footer className={styles.footer}>
        <a
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made With {" <3  "}And Securing By
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
          <b> &#160; Gabriel Briks </b>
        </a>
      </footer>
    </div>
  );
}
