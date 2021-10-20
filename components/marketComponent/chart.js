import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function Chart() {
    return (
        <TradingViewWidget
                    symbol="COINBASE:BTCUSD"
                    theme={Themes.DARK}
                    locale="es"
                    autosize
                    withdateranges
                    timezone="US/Mountain"
                    details
                />
    )
}
