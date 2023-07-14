import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kountry Node Module</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="This is the Kountry library/node module website available in node and yarn package managers"
        />
        <meta
          name="keywords"
          content="country npm,kountry,kountry api,kountry library,kountry npm,kountry yarn"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Kountry-readme/favicon.png" />
      </Head>

      <style jsx>
        {`
          a {
            text-decoration: none;
            color: var(--a-col);
          }
          .link {
            text-decoration: none;
            color: white;
          }
        `}
      </style>

      <main className={styles.main}>
        <h1 className={styles.title}>Documentation</h1>

        <p className={styles.description}>
          <span className={styles.fingerdown}>👇</span>Get started
          <span className={styles.fingerdown}>👇</span>
        </p>

        <div>
          <h2>Kountry &rarr;</h2>
          <p>
            Npm module variant of the{" "}
            <a href="https://github.com/jayantur13/GraphQL-Country-API">
              Country-API
            </a>
          </p>

          <h2>Available Features &rarr;</h2>
          <p>Get country data by providing country name</p>
          <p>Get country data by providing country isocode</p>
          <p>Get country data by providing country code</p>
          <p>Get country data by providing a country id (1-243)</p>
          <p>Get top countries according to GDP (ascending/descending order)</p>
          <p>
            Get top countries according to population (ascending/descending
            order)
          </p>
          <p>Sort all country data alphabetically (a-z/z-a)</p>
          <p>The data you get will be in JSON</p>

          <h2>How to install &rarr;</h2>
          <p>Start by typing anyone command according to your preference</p>
          <p className={styles.code}>
            # Install using npm
            <br />
            <br />
            <a className="link" href="https://www.npmjs.com/package/kountry">
              npm
            </a>{" "}
            install kountry
            <br />
            <br />
            <br />
            # Or install using yarn
            <br />
            <br />
            <a className="link" href="https://yarnpkg.com/package/kountry">
              yarn
            </a>{" "}
            add kountry
          </p>

          <h2>Available Methods &rarr;</h2>
          <p>byName(countryName) : provide valid country name</p>
          <p>byIsoCode(isoCode) : provide valid country isocode</p>
          <p>byCountryCode(countryCode) : provide valid countryCode</p>
          <p>byId(countryId) : provide valid country id</p>
          <p>byGdp(sort,limit) : sort countries by Gdp</p>
          <p>byPopulation(sort,limit) : sort countries by population </p>
          <p>doAlphabetically(sort,limit) : sort countries alphabetically</p>
        </div>
      </main>
    </>
  );
}
