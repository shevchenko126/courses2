import '../scss/globals.css'
import '../scss/index.scss'

function MyApp({ Component, pageProps }) {
  return (

    <>
        <h1>HEADER</h1>
        <Component {...pageProps} />
        <h2>FOOTER</h2>
    </>
    )
}

export default MyApp
