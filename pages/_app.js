import { useEffect } from "react";
import Head from 'next/head'
import '../styles/globals.scss'
import injectContext from "../store/appContext"


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <title>Costa Rica Bitcoin</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default injectContext(MyApp)
