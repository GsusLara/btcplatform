import Layout from "../components/layout"
// import MarketComponent from "../components/marketComponent"
import dynamic from 'next/dynamic'

export default function Market() {
    const Chart = dynamic(import('../components/chart'),{ssr:false})
    return (
        <Layout>
            <div className="col-12 pBox">
                <Chart/>
            </div>
        </Layout>
    )
}


