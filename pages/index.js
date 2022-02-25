import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

export default function Home() {

  return (
    <div className={styles.container}>
      <Sidebar/>
      <Head>
        <title>Kountry</title>
        <meta name="description" content="This the Kountry library website available in npm and yarn" />
        <meta name="keywords" content="kountry,kountry api,kountry library,kountry npm,kountry yarn"/>
        <meta name="robots"  content="index,follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title} >
         Documentation
        </h1>

        <p className={styles.description}>
        <span className={styles.fingerdown}>👇</span>Get started<span className={styles.fingerdown}>👇</span>
        </p>

        <div>
        <h2>Introduction &rarr;</h2>
          <p>Kountry package is a collection of data of countries containing data like population, area covered, GDP and<br/> isocode etc.
          The data available with use maybe inaccurate,outdated or duplicated,so you are welcome to<br/>contribute for some.
          The data requested is available in JSON format for convenience.
          </p>
        </div>

        <div>
        <h2>Available Features &rarr;</h2>
          <p>Get country data by providing country name</p>
          <p>Get country data by providing country isocode</p>
          <p>Get country data by providing country code</p>
          <p>Get country data by providing a country id (1-243)</p>
          <p>Get top countries according to GDP (ascending/descending order)</p>
          <p>Get top countries according to population (ascending/descending order)</p>
          <p>Sort all country data alphabetically (a-z/z-a)</p>
          <p>The data you get will be in JSON</p>
        </div>

        <div> 
        <h2>How to install &rarr;</h2>
        <p>Start by typing anyone command according to your preference</p>
        <p className={styles.code}>
            # Install using npm
            <br />
            <br />
            npm install kountry
            <br />
            <br />
            <br />
            # Or install using yarn
            <br />
            <br />
            yarn install kountry
        </p>
        </div>
   
      <div>
      <h2>Available Methods &rarr;</h2>
        <p>byName(countryName) : provide valid country name</p>
        <p>byIsoCode(isoCode) : provide valid country isocode</p>
        <p>byCountryCode(countryCode) : provide valid countryCode</p>
        <p>byId(countryId) : provide valid country id</p>
        <p>byGdp(sort,limit) : sort countries by Gdp</p>
        <p>byPopulation(sort,limit) : sort countries by population </p>
        <p>doAlphabetically(sort,limit) : sort countries alphabetically</p>
      </div>
      </div>
      </main>

      <Footer/>
    </div>
  )
}
