import '../styles/globals.scss'
import injectContext from "../store/appContext";
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas, fab)


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default injectContext(MyApp)
