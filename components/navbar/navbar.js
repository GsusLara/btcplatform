import { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import logo from "../../public/btclogo.svg"
import { Modal } from "react-bootstrap";
import Login from '../login';
import { auth } from "../../store/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth"


export default function Navbar() {
    const [logueado, setlogueado] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setShow(false)
            setlogueado(true);
        } else {
            setlogueado(false)
        }
    })

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
                        {logueado ?
                            <>
                                <a className="nav-link" aria-current="page" href="#">Mi cuenta</a>
                                <Link href="/Collect">
                                    <a className="nav-link" >Vender BTC</a>
                                </Link>
                                <a className="nav-link" href="#">Comprar BTC</a>
                                <Link href="/Market">
                                    <a className="nav-link" >Mercado</a>
                                </Link>
                            </> :
                            <a className="nav-link loginButton" onClick={handleShow} >Iniciar sesión</a>
                        }
                        <a className="nav-link" href="#">Acerca de</a>
                    </div>
                    <div className="collapse navbar-collapse" />
                    <a className="nav-link closeButton" onClick={()=>signOut(auth)} style={{ display: logueado? "inline" : "none" }}>cerrar sesión</a>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton />
                <Login />
            </Modal>
        </nav>
    )
}

