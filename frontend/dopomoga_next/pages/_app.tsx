import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Header from "../components/Home/Header";
import HeaderNavigate from "../components/Home/HeaderNavigate";
import FooterSubscription from "../components/Home/FooterSubscription";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <HeaderNavigate desktopClassName="header-content-block-desktop" />
            <Component {...pageProps} />
            <FooterSubscription />
        </>
    )
}

export default MyApp
