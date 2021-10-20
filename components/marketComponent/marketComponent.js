import dynamic from 'next/dynamic'

export default function MarketComponent() {
    const Chart = dynamic(import('./chart'),{ssr:false})
    return (
        <div className="row justify-content-center">
            <div className="col-12 grapic">
                <Chart/>
            </div>
        </div>
    )
}


