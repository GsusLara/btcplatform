import { useContext } from "react";
import { Context } from '../../store/appContext';
import QRCode from "react-qr-code";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"

export default function DemoComponent() {
    const { store, actions } = useContext(Context);
    return (
        <div className="row justify-content-center">
            <div className="col-10 col-lg-6 mt-2 mt-lg-0 text-center">
                <h1>Realizar pago</h1>
                <p>Asegurate de tener todo listo para realizar el pago, la direccion será habilitada por 5 minutos</p>
            </div>
            <Tiquet />
            <div className="col-6 mt-4 mt-lg-4 mt-xxl-4 mb-2 text-center">
                <Link href="/">
                    <a type="button" className="btn btn-danger">Cancelar</a>
                </Link>
            </div>
        </div>

    )
}

const Tiquet = () => {
    const { store, actions } = useContext(Context);

    const pagando = (wallet) => {
        actions.pagar();
    }

    if (store.direccion.length > 5) {
        return (
            <div className="col-12 text-center mt-xxl-5">
                <div className="col-12 col-lg-6 mx-auto text-center">
                    <QRCode value={store.direccion} bgColor="#e0e8eb"/>
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
            </div>
        )
    } else {
        return (
            <div className="d-grid gap-2 mt-5">
                <button type="button" className="btn btn-warning mt-2 mx-auto" onClick={() => pagando(store.direccion)}>Pagar ahora</button>
            </div>

        )
    }
}



