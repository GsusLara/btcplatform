import { useContext } from "react";
import { Context } from '../../store/appContext';
import Link from "next/link"

export default function DemoComponent() {
    const { store, actions } = useContext(Context);
    return (
        <div className="row justify-content-center">
            <div className="col-6 mt-5 text-center">
                <h1>{store.saludo}</h1>
                <h3>Este es el demo!</h3>
                <Link href="/">
                    <a type="button" className="btn btn-primary mt-2">volver</a>
                </Link>
            </div>
        </div>

    )
}
