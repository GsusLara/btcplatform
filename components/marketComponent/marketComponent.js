
export default function MarketComponent() {
    const getData = () => {
        const graphicInfo = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

        graphicInfo.onmessage = (message) => {
            console.log(message.data)
        }
    }

 

    return (
        <div className="row justify-content-center">
            <div className="col-11 col-lg-8 mt-5 grapic">
                hola
            </div>
        </div>
    )
}


