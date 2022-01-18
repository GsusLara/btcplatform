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
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand" >
                        <Image src={logo} alt="logo bootstrap" width="30" height="30" className="d-inline-block" />
                        <span className="m-2 company">CostaRica Bitcoin</span>
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={["fas", "bars"]} className="fs-2" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {logueado ?
                            <>
                                <Link href="/Cuenta">
                                    <a className="nav-link" aria-current="page">Mi cuenta</a>
                                </Link>
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
                    {logueado && <a className="nav-link closeButton " onClick={() => salir()}>cerrar sesión</a>}
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton />
                <Login />
            </Modal>
        </nav>
    )
}

