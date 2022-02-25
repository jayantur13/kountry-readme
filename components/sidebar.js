import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Footer() {

  const router = useRouter()
  const currentRoute = router.pathname;


  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()


  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <nav className='sidebar'>
        <Link href="/" passHref={true}><a><Image src="/kountrylogo.png" alt="Kountry Logo" width={48} height={48} /></a></Link>
        <Link href="/" passHref={true}><a className={currentRoute === '/' ? 'active' : ''}>Documentation</a></Link>
        <Link href="/examples" passHref={true}><a className={currentRoute === '/examples' ? 'active' : ''}>Examples</a></Link>
        <Link href="/projects"><a className={currentRoute === '/projects' ? 'active' : ''}>Projects</a></Link>
        <Link href="https://github.com/jayantur13/Kountry-readme"><a target='_blank'>Github &rarr;</a></Link>
        <div>
          <button><Image src="/light.png" alt="light" width={24} height={24} className='btn' onClick={() => setTheme('light')}/></button>
          <button><Image src="/dark.png" alt="dark" width={24} height={24} className='btn' onClick={() => setTheme('dark')}/></button>
        </div>
      </nav>
      <style jsx>
        {`.sidebar {
    justify-content: center;
    align-items: center;
    width: 250px;
    background: var(--side-bar);
    position: fixed;
    height: 100%;
    overflow: auto;
  }


  /* Sidebar links */
  .sidebar a {
    display: block;
    color: var(--link-inactive);
    padding: 16px;
    text-decoration: none;
  }
  
  /* Active/current link */
  .sidebar a.active {
    background-color: #e01414;
    color: white;
  }
  
  .sidebar a:first-child {
    border-bottom: 0.5px solid #555;
  }
  
  .sidebar a:first-child:hover:not(.active) {
    cursor: pointer;
  }
  
  
  /* Links on mouse-over */
  .sidebar a:hover:not(.active) {
    background-color: var(--link-hover);
    color: white;
  }
   
  /* On screens that are less than 700px wide, make the sidebar into a topbar */
  @media screen and (max-width: 700px) {
    .sidebar {
      width: 100%;
      height: auto;
      position:relative;
    }
    .sidebar a {float: left;}
  
    .sidebar a:first-child {
      border-bottom: hidden;
    }

  }
  
  /* On screens that are less than 400px, display the bar vertically, instead of horizontally */
  @media only screen and (max-width: 400px) {
    .sidebar {
      width: 100%;
    }
    .sidebar a {
      text-align: center;
      float: none;
    }
    .sidebar div {
      text-align: center;
      float: none;
    }
  }

  div {
    float:left;
    margin-top:10px;
    margin-right:12px;
    margin-left:18px;
  }

  button {
    border:none;
    background:none;
  }

 `}
      </style>
    </>
  )
}
