import { useContext } from "react"
import { Context } from "../../store/appContext";

export default function Inicio() {
    const { store} = useContext(Context);
    return (
        <div className="row justify-content-center">
            <div className="col-6 mt-5 text-center">
                <p>Fecha{" "}{store.fecha}</p>
                <h2>Precio del BTC{" "}₡{" "}{new Intl.NumberFormat().format(store.tcBtc)}</h2>
            </div>
        </div>
    )
}
