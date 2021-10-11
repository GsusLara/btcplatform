import Image from 'next/image'
import Link from "next/link"
import logo from "../../public/btclogo.svg"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                <a className="navbar-brand" >
                    <Image src={logo} alt="logo bootstrap" width="30" height="30" className="d-inline-block" />
                    <span className="m-2 company">CostaRica Bitcoin</span>
                </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#">Pagar</a>
                        <Link href="/demo">
                        <a className="nav-link" >Cobrar</a>
                        </Link>
                        <a className="nav-link" href="#">Comprar/Vender</a>
                        <a className="nav-link" href="#">Mercado</a>
                        <a className="nav-link" href="#">Noticias</a>
                        <a className="nav-link" href="#">Acerca de</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
