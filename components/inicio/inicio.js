import { useContext } from "react"
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Inicio() {
    const { store } = useContext(Context);
    return (
        <>
            <div className="container-fluid pt-5 boxheader">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 text-center position-absolute bottom-50">
                            <span className="fs-1 title">Btc en Costa Rica</span>
                            <br />
                            <span className="fs-3 subtitle">Compre Bitcoin de forma rapida y segura</span>
                            <br />
                            <button type="button" className="btn btn-warning mt-5">¿como comprar?</button>
                        </div>
                        <div className="col-2 text-center position-absolute bottom-0 pb-5">
                            <FontAwesomeIcon icon={["fas", "chevron-down"]} className="fs-1 down" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-5  zona2">
                <div className="row mt-5">
                    <div className="col-6 text-center"><p>Fecha{" "}{store.fecha}</p>
                        <h2>Precio del BTC <br />₡{new Intl.NumberFormat().format(store.tcBtc)}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
