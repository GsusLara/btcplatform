import { useState, useContext, useEffect } from 'react'
import { Context } from "../../store/appContext";
import Image from 'next/image'
import Link from "next/link"
import logo from "../../assets/btclogo.svg"
import Login from '../login';
import { auth } from "../../store/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from 'next/router'
import { db } from "../../store/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";


export default function Navbar() {
    const { actions } = useContext(Context);
    const { push } = useRouter();
    const [logueado, setlogueado] = useState(false);


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
            }
        })
        return () => {
            autenticando()
        }
    }, [])

    return (
        <nav className="navbar navbar-expand-lg  bg-dark">
            <div className="container">
                <Link href="/" className="navbar-brand" >
                    <Image src={logo} alt="logo bootstrap" width="30" height="30" className="d-inline-block" />
                    <span className="m-2 company">CostaRica Bitcoin</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-md-auto">
                        <li>
                            <Link href="/">
                                {/* <LinkScroll to="buybox" smooth={true}>
                                    <span className="nav-link" >comprar</span>
                                </LinkScroll> */}
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                {/* <LinkScroll to="sellbox" smooth={true}>
                                    <span className="nav-link">Vender</span>
                                </LinkScroll> */}
                            </Link>
                        </li>
                        <li>
                            <Link href="/Market" className="nav-link" >TradingView
                            </Link>
                        </li>
                        {logueado ?
                            <>
                                <li>
                                    <Link href="/Cuenta" className="nav-link" aria-current="page"> Mi cuenta
                                    </Link>
                                </li>
                            </> :
                            <li>
                                <a className="nav-link loginButton" data-bs-toggle="modal" data-bs-target="#exampleModal"> <span>unete</span></a>
                            </li>
                        }
                        <li>
                            {logueado && <a className="nav-link closeButton " onClick={() => salir()}>Cerrar sesión</a>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <button type="button" className="btn-close ms-auto m-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        <Login />
                    </div>
                </div>
            </div>
        </nav>
    )
}