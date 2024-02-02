import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Layout from "../components/layout"
import Link from "next/link";
import Cobro from "../components/Cobro";

export default function Exchange() {

    // const { store } = useContext(Context);
    // const [direccion, setdireccion] = useState("pendiente");
    // const [monto, setmonto] = useState(0);

    // //actions

    // const limpiarPago = () => {
    //     setdireccion("pendiente");
    //     setmonto(0);
    // }

    //Render
    // if (direccion == "pendiente") {
        return (
            <Layout>
                {/* <Confirmar pagar={pagar} /> */}
                <Cobro/>
            </Layout>
        )
    // } else if (direccion == "pagado") {
    //     return (
    //         <Layout>
    //             <Pagado monto={monto} limpiarPago={limpiarPago} store={store} />
    //         </Layout>
    //     )
    // } else {
    //     return (
    //         <Layout>
    //             <Tiquet direccion={direccion} limpiarPago={limpiarPago} validarPago={validarPago} />
    //         </Layout>
    //     )
    // }

}


// //Components
// const Confirmar = (props) => {
//     const { pagar } = props
//     return (
//         <div className="container pBox">
//             <div className="row justify-content-center text-center">
//                 <div className="col-12 col-lg-6 mt-3">
//                     <h1 >Cambia tus BTC por colones</h1>
//                     <p className="mt-5">El cambio de bitcoin tiene un plazo de acreditación de hasta 24 horas para su verificacion segun la disponibilidad de la red</p>

//                     <button type="button" className="btn btn-warning d-grid mx-auto m-3" onClick={() => pagar()}>Cambiar ahora</button>
//                     <Link href="/" type="button" className="btn btn-danger" >salir
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }



// const Pagado = (props) => {
//     const { monto, limpiarPago, store } = props
//     return (
//         <div className="row justify-content-center text-center">
//             <div className="col-12 text-center mt-4">
//                 <h1>¡Pago recibido!</h1>
//                 <div className="mt-5">
//                     <h5>Se han recibido</h5>
//                     <h4><strong>{monto} BTC</strong></h4>
//                 </div>
//                 <div className="mt-3">
//                     <h5>Se enviarán a tu cuenta bancaria</h5>
//                     ₡ {Math.trunc(monto * store.tcBtc)} colones
//                 </div>
//                 <Link href="/" type="button" className="btn btn-primary mt-5" onClick={() => limpiarPago()}>salir
//                 </Link>
//             </div>
//         </div>
//     )
// }



