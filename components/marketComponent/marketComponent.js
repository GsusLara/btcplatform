import TradingViewWidget, { Themes } from 'react-tradingview-widget';
export default function MarketComponent() {

    return (
        <div className="row justify-content-center">
            <div className="col-12 grapic">
                <TradingViewWidget
                    symbol="COINBASE:BTCUSD"
                    theme={Themes.DARK}
                    locale="es"
                    autosize
                />
            </div>
        </div>
    )
}


