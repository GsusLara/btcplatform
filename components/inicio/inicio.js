import { useContext } from "react"
import { Context } from "../../store/appContext";

export default function Inicio() {
    const { store } = useContext(Context);

    return (
        <>
            <div className="container-fluid pt-5 boxheader" id="top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 text-center position-absolute">
                            <p>
                                <span className="fs-1 title">Btc en Costa Rica</span>
                                <br />
                                <span className="fs-3 subtitle">Compre y venda Bitcoin de forma rapida y segura </span>
                            </p>
                            <p>
                                <span className="fs-5 subtitle">El Precio del BTC en este momento es de:</span>
                                <br />
                                <span className="fs-4 title">₡{new Intl.NumberFormat().format(store.BtcColon)}</span>
                                <span className="fs-5 subtitle"> Colones, </span>
                                <span className="fs-4 title">${new Intl.NumberFormat().format(store.BtcDolar)}</span>
                                <span className="fs-5 subtitle"> Dolares</span>
                            </p>
                            <div className="botones-container">
                                <button className="btn btn-primary btn-comprar mx-1">Comprar</button>
                                <button className="btn btn-success btn-vender mx-1">Vender</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


{/* 
import CobrarComponent from "../cobrarComponent";

<div className="container pt-5 zona2" id="sellbox">
                <div className="row">

                <CobrarComponent/>

                </div>

                {store.fecha}


            </div> */}


