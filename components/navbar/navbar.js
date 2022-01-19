import { useState, useContext, useEffect } from 'react'
import { Context } from "../../store/appContext";
import Image from 'next/image'
import Link from "next/link"
import logo from "../../public/btclogo.svg"
import { Modal } from "react-bootstrap";
import Login from '../login';
import { auth } from "../../store/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from 'next/router'
import { db } from "../../store/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar() {
    const { actions } = useContext(Context);
    const { push } = useRouter();
    const [logueado, setlogueado] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const salir = () => {
        signOut(auth);
        push("/");
        setlogueado(false);
        actions.logout();
    }

    async function accesoInfo(usuarioId) {
        const refInfo = doc(db, `dataUsers/${usuarioId}`);
        const consulta = await getDoc(refInfo);
        if (consulta.exists()) {
            actions.getPerfilUser(consulta.data())
        } else {
            setDoc(refInfo, { nombre: "", apellidos: "", cedula: "", banco: "", cuenta: "", nombreCuenta: "" })
            const consulta = await getDoc(refInfo);
            actions.getPerfilUser(consulta.data())
        }
    }

    useEffect(() => {
        const autenticando = onAuthStateChanged(auth, (usuarioFirebase) => {
            if (usuarioFirebase) {
                setlogueado(true);
                actions.login(usuarioFirebase);
                accesoInfo(usuarioFirebase.uid);
                setShow(false);
            }
        })
        return () => {
            autenticando()
        }
    }, [])

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand" >
                        <Image src={logo} alt="logo bootstrap" width="30" height="30" className="d-inline-block" />
                        <span className="m-2 company">CostaRica Bitcoin</span>
                    </a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={["fas", "bars"]} className="fs-2" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-md-auto">
                        {logueado ?
                            <>
                                <Link href="/Cuenta">
                                    <a className="nav-link" aria-current="page"> <FontAwesomeIcon icon={["far", "user"]} className="me-2" />Mi cuenta</a>
                                </Link>
                                <Link href="/Collect">
                                    <a className="nav-link"><FontAwesomeIcon icon={["fas", "wallet"]} className="me-2"/>Exchange</a>
                                </Link>
                                <Link href="/Market">
                                    <a className="nav-link" ><FontAwesomeIcon icon={["fas", "chart-line"]} className="me-2"/>Mercado</a>
                                </Link>
                            </> :
                            <a className="nav-link loginButton" onClick={handleShow} ><FontAwesomeIcon icon={["fas", "users"]} className="me-2"/>Ingresar / Registrarse</a>
                        }
                        {logueado && <a className="nav-link closeButton " onClick={() => salir()}><FontAwesomeIcon icon={["fas", "sign-out-alt"]} className="me-2"/>Cerrar sesión</a>}
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton />
                <Login />
            </Modal>
        </nav>
    )
}

