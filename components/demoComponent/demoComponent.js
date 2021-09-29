import { useContext } from "react";
import { Context } from '../../store/appContext';
import QRCode from "react-qr-code";
import Link from "next/link"

export default function DemoComponent() {
    const { store, actions } = useContext(Context);
    return (
        <div className="row justify-content-center">
            <div className="col-6 mt-2 text-center">
                <h1>Realizar pago</h1>
                <p>Asegurate de tener todo listo para realizar el pago, la direccion será habilitada por 5 minutos</p>
            </div>
            <div className="w-100" />
            <div className="col-6 mb-4 text-center">
                <Tiquet />
            </div>
            <div className="w-100" />
            <div className="col-3 text-center">
                <Link href="/">
                    <a type="button" className="btn btn-primary mt-2">salir</a>
                </Link>
            </div>
        </div>

    )
}

const Tiquet = () => {
    const { store, actions } = useContext(Context);
    
    if (store.direccion.length > 5) {
        return (
            <>
                <QRCode value={store.direccion} bgColor="#e0e8eb" size="190"/>
                <p className="mt-2">{store.direccion}</p>
            </>
        )
    } else {
        return <button type="button" className="btn btn-warning mt-2" onClick={()=>actions.pagar()}>Pagar ahora</button>
    }
}



