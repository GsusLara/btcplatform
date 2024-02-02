import { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext";
import Layout from "../components/layout";

export default function Home() {
  const { store } = useContext(Context);
  const [precioBTC, setprecioBTC] = useState(null)

  useEffect(() => {
    let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
    ws.onmessage = (event) => {
      const infoBTC = JSON.parse(event.data);
      setprecioBTC(infoBTC.p);
    };

    return () => {
      ws.close();
    };
  }, []);


  return (
    <Layout>
      <div className="container-fluid py-5 boxheader position-relative">
        <div className="col-11 text-center position-absolute top-50 start-50 translate-middle">
          <p className="title fs-1 mb-5">Compre y venda Bitcoin de forma rapida y segura </p>
          <div className="m-lg-5">
            <p>
              <span className="fs-5 subtitle">El cambio de 1 Bitcoin es de:</span>
              <br />
              <span className="fs-4 title">₡ {precioBTC !== null ? new Intl.NumberFormat('en-US').format(parseFloat(store.ventaUSD * precioBTC).toFixed(2)) : "Cargando..."}</span>
              <span className="fs-5 subtitle"> Colones</span>
              <br />
              <span className="fs-4 title">$ {precioBTC !== null ? new Intl.NumberFormat('en-US').format(parseFloat(precioBTC).toFixed(2)) : "Cargando..."}</span>
              <span className="fs-5 subtitle"> Dolares</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}