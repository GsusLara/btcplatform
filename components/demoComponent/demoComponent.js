import { useContext } from "react";
import { Context } from '../../store/appContext';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QRCode from "react-qr-code";
import Link from "next/link"

export default function DemoComponent() {
    const { store, actions } = useContext(Context);

    if (store.direccion == "pendiente") {
        return <Confirmar actions={actions}/>
    } else if (store.direccion == "pagado") {
        return <Pagado />
    } else {
        return<Tiquet store={store} />
    }

}


const Confirmar = (props) => {
    const { actions } = props
    return (
        <div className="row justify-content-center text-center">
            <div className="col-10 mt-3">
                <h1 >Realizar pago</h1>
                <p className="mt-5">Asegurate de tener todo listo para realizar el pago, la direccion será habilitada por 5 minutos</p>

                <button type="button" className="btn btn-warning d-grid mx-auto m-3" onClick={() => actions.pagar()}>Pagar ahora</button>
                <Link href="/">
                    <a type="button" className="btn btn-danger">Cancelar</a>
                </Link>
            </div>
        </div>
    )
}

const Pagado = () => {
    return (
        <h1>Gracias por tu compra</h1>
    )
}

const Tiquet = (props) => {
    const { store } = props
    return (
        <div className="row justify-content-center text-center">
            <div className="col-12 text-center mt-4">
                <h3>Escanea o copia la dirección de pago</h3>
                <div className="col-12 col-lg-6 mx-auto mt-3 text-center">
                    <QRCode value={store.direccion} bgColor="#e0e8eb" />
                </div>
                <div className="col-10 col-lg-5 mx-auto text-center ">
                    <div className="position-relative mt-2 mt-xxl-5 hash ">
                        <div className="p-3">
                            <span>{store.direccion}</span>
                        </div>
                        <CopyToClipboard text={store.direccion}>
                            <FontAwesomeIcon icon={["fas", "copy"]} className="clipboard position-absolute top-0 end-0" />
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="col-10 mt-xxl-3 text-center mx-auto">
                    <span className="spinner-border m-2 align-middle spinner" role="status" />
                    <strong>Esperando la transacción</strong>
                </div>
                <Link href="/">
                    <a type="button" className="btn btn-danger mt-3">Cancelar</a>
                </Link>
            </div>
        </div>
    )
}



