import Context from '../src/Components/Context'
import Footer from '../src/Components/Footer'
import Navigation from '../src/Components/Navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Context>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Context>
    </>
  )
}

export default MyApp
