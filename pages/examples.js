import Head from 'next/head'
import styles from '../styles/Examples.module.css'

export default function Examples() {

    return (
        <>
            <Head>
                <title>Kountry - Examples</title>
                <meta name="description" content="Some examples for the people to try in this country npm package" />
                <meta name="keywords" content="country npm,kountry,kountry api,kountry library,kountry npm,kountry yarn" />
                <meta name="robots" content="index,follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <style jsx>
                {`
              a {
                text-decoration: none;
                color:var(--a-col);
              }
             `}
            </style>

            <main className={styles.main}>
                <h1 className={styles.title} >
                    Some Examples
                </h1>

                <p className={styles.description}>
                    <span className={styles.fingerdown}>👇</span>Checkout<span className={styles.fingerdown}>👇</span>
                </p>

                <div>
                    <h2>See detailed usage (tap 🔗) &rarr;</h2>
                    <p>byName(countryName)<a href='#bname'>🔗</a></p>
                    <p>byCountryCode(countryCode)<a href='#bcc'>🔗</a></p>
                    <p>byId(id) <a href='#bid'>🔗</a></p>
                    <p>byIsoCode(isoCode)<a href='#bic'>🔗</a></p>
                    <p>byPopulation(sort,limit)<a href='#bp'>🔗</a></p>
                    <p>byGdp(sort,limit) <a href='#bg'>🔗</a></p>
                    <p>doAlphabetically(sort,limit)<a href='#bda'>🔗</a></p>
                    <p>Note: Documentation on hover available in code editors</p>

                    <h2>Description &rarr;</h2>
                    <p id='bname'>byName(countryName)</p>
                    <p>@param countryName [String] takes string and is case sensitive</p>
                    <p className={styles.code}>
                        const kountry = require(&apos;kountry&apos;)<br />
                        const country = kountry.byName(&apos;India&apos;)<br />
                        console.log(country)
                    </p><br />
                    <p id='bcc'>byCountryCode(countryCode)</p>
                    <p>@param CountryCode [Number/String] takes a valid number/string that exists</p>
                    <p className={styles.code}>
                        const kountry = require(&apos;kountry&apos;)<br />
                        {`//`}Codes without &apos;-&apos;<br /><br />
                        const country = kountry.byCountryCode(91)<br />
                        {`//`}Codes with &apos;-&apos;<br /><br />
                        const country = kountry.byCountryCode(&apos;1-849&apos;)<br />
                        console.log(country)<br />
                    </p><br />
                    <p id='bid'>byId(id)</p>
                    <p>@param id [Number] takes a valid number that exists</p>
                    <p className={styles.code}>
                        const kountry = require(&apos;kountry&apos;)<br />
                        const country = kountry.byId(91)<br />
                        console.log(country)
                    </p><br />
                    <p id='bic'>byIsoCode(isoCode)</p>
                    <p>@param IsoCode [String] takes string and is case sensitive</p>
                    <p className={styles.code}>
                        const kountry = require(&apos;kountry&apos;)<br />
                        {`//`} Two character isocode<br /><br />
                        const country = kountry.byIsoCode(&apos;IN&apos;)<br /><br />
                        {`//`} Three character isocode<br />
                        const country = kountry.byIsoCode(&apos;IND&apos;)<br />
                        console.log(country)
                    </p><br />
                    <p id='bp'>byPopulation(sort,limit)</p>
                    <p>@param sort [String] takes either &apos;asc&apos; or &apos;desc&apos; for ordering<br />
                        @param limit [Number] Number must be between {'>='} 4 and 10</p>
                    <p className={styles.code}>
                        const kountry = require(&apos;kountry&apos;)<br />
                        {`//`}Defaults to sort = &apos;asc&apos; and limit is 4<br />
                        const country = kountry.byPopulation()<br />
                        <br />
                        {`//`}Ascending order limit default is 4<br />
                        const country = kountry.byPopulation(sort=&apos;asc&apos;,limit=4)<br />
                        <br />
                        {`//`}Descending order limit default is 4<br />
                        const country = kountry.byPopulation(sort=&apos;desc&apos;,limit=4)<br />
                        <br />
                        {`//`}Ascending order limit 8<br />
                        const country = kountry.byPopulation(sort=&apos;asc&apos;,limit=8)<br />
                        <br />
                        {`//`}Descending order limit 8<br />
                        const country = kountry.byPopulation(sort=&apos;desc&apos;,limit=8)<br />
                        console.log(country)
                    </p><br />
                    <p id='bg'>byGdp(sort,limit)</p>
                    <p> @param sort [String] takes either &apos;asc&apos; or &apos;desc&apos; for ordering<br />
                        @param limit [Number] Number must be between {'>='} 4 and 10</p>
                    <p className={styles.code}>
                        const kountry = require(&apos;kountry&apos;)<br />
                        {`//`}Defaults to sort = &apos;asc&apos; and limit is 4<br />
                        const country = kountry.byGdp()<br />
                        <br />
                        {`//`}Ascending order limit default is 4<br />
                        const country = kountry.byGdp(sort=&apos;asc&apos;,limit=4)<br />
                        <br />
                        {`//`}Descending order limit default is 4<br />
                        const country = kountry.byGdp(sort=&apos;desc&apos;,limit=4)<br />
                        <br />
                        {`//`}Ascending order limit 8<br />
                        const country = kountry.byGdp(sort=&apos;asc&apos;,limit=8)<br />
                        <br />
                        {`//`}Descending order limit 8<br />
                        const country = kountry.byGdp(sort=&apos;desc&apos;,limit=8)<br />
                        console.log(country)
                    </p><br />
                    <p id='bda'>doAlphabetically(sort,limit)</p>
                    <p>@param sort [String] takes either &apos;asc&apos; or &apos;desc&apos; for ordering<br />
                        @param limit [Number] Number must be between {'>='} 4 and {'<'} MAX ie total length</p>
                    <p className={styles.code}>
                        const kountry = require(&apos;kountry&apos;)<br />
                        {`//`}Defaults to sort = &apos;asc&apos; and limit is 4<br />
                        const country = kountry.doAlphabetically()<br />
                        <br />
                        {`//`}Ascending order limit default is 4<br />
                        const country = kountry.byPopulation(sort=&apos;asc&apos;,limit=4)<br />
                        <br />
                        {`//`}Descending order limit default is 4<br />
                        const country = kountry.byPopulation(sort=&apos;desc&apos;,limit=4)<br />
                        <br />
                        {`//`}Ascending order limit MAX i.e total length<br />
                        const country = kountry.byPopulation(sort=&apos;asc&apos;,limit=kountry.MAX)<br />
                        <br />
                        {`//`}Descending order limit MAX i.e total length<br />
                        const country = kountry.byPopulation(sort=&apos;desc&apos;,limit=kountry.MAX)<br />
                        <br />
                        {`//`}Ascending order limit 8<br />
                        const country = kountry.byPopulation(sort=&apos;asc&apos;,limit=8)<br />
                        <br />
                        {`//`}Descending order limit 8<br />
                        const country = kountry.byPopulation(sort=&apos;desc&apos;,limit=8)<br />
                        console.log(country)
                    </p><br />
                </div>
            </main>
        </>
    )
}
