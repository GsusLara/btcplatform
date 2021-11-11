import { useEffect } from "react";
import Head from 'next/head'
import '../styles/globals.scss'
import injectContext from "../store/appContext";
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab, far)


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
        <title>Costa Rica Bitcoin</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default injectContext(MyApp)
