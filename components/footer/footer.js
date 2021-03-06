import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-lg-start">
            <div className="text-center p-2" style={{color: "#ffffff"}}>
                <FontAwesomeIcon icon={["fas","copyright"]}/> 2022 Copyright:
                <a className="text-white mx-2" href="#">CostaRicaBitcoin.com</a>
            </div>
        </footer>
    )
}
