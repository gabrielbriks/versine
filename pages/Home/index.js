import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useState } from "react";

import api from "../api/register";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const data = { name, email };
    // console.log(data);

    if (!data) return Error;
    try {
      const response = await api(data);
      console.log(response);
    } catch (error) {
      console.log("Error in Registration");
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing. Find in-depth information about Next.js
            features and API. find in-depth information about Next.js features
            and API.
          </p>

          <p className={styles.description}>
            Find in-depth information about Next.js features and API.
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Ebook</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </div>
        </main>
        <section className={styles.section}>
          <h1 className={styles.title}>
            Here New <a href="https://nextjs.org">Routes</a>
          </h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Seu Nome"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Seu Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </section>
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
