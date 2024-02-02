import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

export default function Cobro() {

    const [direccion, setdireccion] = useState("dd")

    const monedero = async () => {
        const response = await fetch("/api/facturacion")
        const data = await response.json()
        setdireccion(data.direccion)
    }
    // const validarPago = (recAddr) => {
    //     const ws = new WebSocket("wss://ws.blockchain.info/inv");
    //     ws.onopen = () => {
    //         ws.send(JSON.stringify(
    //             {
    //                 "op": "addr_sub",
    //                 "addr": recAddr
    //             }
    //         ))
    //     }
    //     ws.onmessage = (message) => {
    //         let response = JSON.parse(message.data);
    //         let transacciones = response.x.out;
    //         for (let i = 0; i < transacciones.length; i++) {
    //             if (transacciones[i].addr == recAddr) {
    //                 let montoRecibido = transacciones[i].value / 100000000;
    //                 setmonto(montoRecibido);
    //                 setdireccion("pagado");
    //             }
    //         }
    //     }
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         validarPago(direccion);
    //     }, 2000);
    // }, [])

    useEffect(() => {
        monedero();
    }, [])


    return (
        <div className="row justify-content-center text-center pBox">
            <div className="col-12 text-center mt-4">
                <h4>Escanea o copia la dirección de pago</h4>
                <div className="col-10 col-lg-3 mx-auto text-center qrcode">
                    <img src={`https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${direccion}`} className="img-fluid p-0" alt="BTC wallet" />
                </div>
                <div className="col-10 col-lg-5 col-xxl-4 mx-auto text-center ">
                    <div className="position-relative mt-2 mt-xxl-5 hash ">
                        <div className="p-3">
                            <span>{direccion}</span>
                        </div>
                        {/* <CopyToClipboard text={direccion}>
                            {/* <FontAwesomeIcon icon={["fas", "copy"]} className="clipboard position-absolute top-0 end-0" /> 
                            copy
                        </CopyToClipboard> */}
                    </div>
                </div>
                <div className="col-10 mt-xxl-3 text-center mx-auto">
                    <span className="spinner-border m-2 align-middle spinner" role="status" />
                    <strong>Esperando la confirmación en la red</strong>
                </div>
                {/* <Link href="/" type="button" className="btn btn-danger mt-3" onClick={() => limpiarPago()}>Cancelar
                </Link> */}
            </div>
        </div>
    )
}