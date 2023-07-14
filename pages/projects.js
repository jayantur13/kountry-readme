import Head from "next/head";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Kountry Node Module - Projects</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Checkout other exciting projects other than Kountry npm package"
        />
        <meta
          name="keywords"
          content="country npm,kountry,kountry api,kountry library,kountry npm,kountry yarn"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Kountry-readme/favicon.png" />
      </Head>
      <div className={styles.content}>
        <h1 className={styles.title}>Projects</h1>

        <p className={styles.description}>
          <span className={styles.fingerdown}>👇</span>Projects of interest
          <span className={styles.fingerdown}>👇</span>
        </p>

        <div className={styles.wrapper}>
          <div className={styles.card}>
            <h3 className={styles.cardtitle}>Country data</h3>
            <p className={styles.cardcontent}>
              This is the API version of this project,the API is based on
              GraphQL.Click below button to know more.
            </p>
            <a
              href="https://github.com/jayantur13/GraphQL-Country-API"
              className={styles.cardbtn}
            >
              Checkout
            </a>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardtitle}>Word of the day</h3>
            <p className={styles.cardcontent}>
              This is an API project that gets word of the day from single and
              multiple sources together.Click below button to know more.
            </p>
            <a
              href="https://github.com/jayantur13/Word-of-the-day"
              className={styles.cardbtn}
            >
              Checkout
            </a>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardtitle}>The words</h3>
            <p className={styles.cardcontent}>
              This is an API, you can get trending words and search for a word
              and its meaning.Click below button to know more.
            </p>
            <a
              href="https://github.com/jayantur13/the-words-api"
              className={styles.cardbtn}
            >
              Checkout
            </a>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardtitle}>Android Apps</h3>
            <p className={styles.cardcontent}>
              There are some android apps published,you find all of them on
              Google PlayStore.Click below button to know more.
            </p>
            <a
              href="https://play.google.com/store/apps/developer?id=InfernoTech"
              className={styles.cardbtn}
            >
              Checkout
            </a>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardtitle}>About Author</h3>
            <p className={styles.cardcontent}>
              Visit the author&apos;s website to know more about the author and
              contact him if you need to.Click below button to know more.
            </p>
            <a
              href="https://github.com/jayantur13/jayantur13.github.io"
              className={styles.cardbtn}
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
