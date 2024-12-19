import '../styles/globals.css'
import { ThemeProvider } from '@solorev/react-themes'
import SideBar from '../components/sidebar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider>
    <SideBar/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  </>
}

export default MyApp
