import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="Compra y venta de BTC bitcoin Costa Rica" content="Bitcoin Costa Rica" />
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/btclogo.svg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument