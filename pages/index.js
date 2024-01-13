import { useContext, useEffect } from "react"
import { Context } from "../store/appContext";
import Layout from "../components/layout";

export default function Home() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    const intervalId = setInterval(() => {
      actions.updateTC();
    }, 60000); 
    return () => clearInterval(intervalId);
  }, [actions]);
  
  return (
    <Layout>
      <div className="container-fluid py-5 boxheader position-relative">
                <div className="col-11 text-center position-absolute top-50 start-50 translate-middle">
                    <p className="title fs-1 mb-5">Compre y venda Bitcoin de forma rapida y segura </p>
                    <div className="m-lg-5">
                        <p>
                            <span className="fs-5 subtitle">compra:</span>
                            <br />
                            <span className="fs-4 title">₡{new Intl.NumberFormat().format(store.ventaUSD * store.compraBTC)}</span>
                            <span className="fs-5 subtitle"> Colones</span>
                            <br />
                            <span className="fs-4 title">${new Intl.NumberFormat().format(store.compraBTC)}</span>
                            <span className="fs-5 subtitle"> Dolares</span>
                        </p>                       
                    </div>
                    <div className="m-lg-5">
                        <p>
                            <span className="fs-5 subtitle">Venta:</span>
                            <br />
                            <span className="fs-4 title">₡{new Intl.NumberFormat().format(store.ventaUSD * store.ventaBTC)}</span>
                            <span className="fs-5 subtitle"> Colones</span>
                            <br />
                            <span className="fs-4 title">${new Intl.NumberFormat().format(store.ventaBTC)}</span>
                            <span className="fs-5 subtitle"> Dolares</span>
                        </p>                       
                    </div>
                </div>
            </div>
    </Layout>
  )
}

{/* 
import CobrarComponent from "../cobrarComponent";

<div className="container pt-5 zona2" id="sellbox">
                <div className="row">

                <CobrarComponent/>

                </div>

                {store.fecha}
            <Link href="/Market">
                        <button className="btn btn-primary btnInicio btn-trade">Trade-view</button>
                        </Link>

            </div> */}