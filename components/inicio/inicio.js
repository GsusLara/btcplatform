import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Inicio() {
    return (
        <div className="row justify-content-center">
            <div className="col-6 mt-5 text-center">
                <h1>Bienvenido!!{<FontAwesomeIcon icon={["fab","mailchimp"]} />}</h1>
            </div>
        </div>
    )
}
