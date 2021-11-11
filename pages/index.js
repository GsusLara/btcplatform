import Layout from "../components/layout";
import Inicio from "../components/inicio";
import Script from 'next/script'

export default function Home() {
  return (
    <Layout>
      <Script src="https://third-party-script.js"></Script>
      <Inicio/>
    </Layout>
  )
}
