import { useContext } from "react"
import { Context } from "../../store/appContext";
import Link from "next/link"

export default function Inicio() {
    const { store } = useContext(Context);

    return (
        <>
            <div className="container-fluid py-5 boxheader position-relative">
                <div className="col-11 text-center position-absolute top-50 start-50 translate-middle">
                    <p className="title fs-1 mb-5">Compre y venda Bitcoin de forma rapida y segura </p>
                    <div className="m-lg-5">
                        <p>
                            <span className="fs-5 subtitle">Precio del BTC a las HORA:</span>
                            <br />
                            <span className="fs-4 title">₡{new Intl.NumberFormat().format(store.BtcColon)}</span>
                            <span className="fs-5 subtitle"> Colones</span>
                            <br />
                            <span className="fs-4 title">${new Intl.NumberFormat().format(store.BtcDolar)}.00</span>
                            <span className="fs-5 subtitle"> Dolares</span>
                        </p>
                        <div className="botones-container">
                            <button className="btn btn-primary btnInicio btn-comprar mx-3">Comprar</button>
                            <button className="btn btn-success btnInicio btn-vender mx-3">Vender</button>
                        </div>
                        <p className="fs-3 title mt-5">Análiza tu mejor opción</p>
                        
                        <Link href="/Market">
                        <button className="btn btn-primary btnInicio btn-trade">Trade-view</button>
                        </Link>
                            
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


