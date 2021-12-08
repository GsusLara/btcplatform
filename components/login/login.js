import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { auth } from "../../store/firebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"


export default function Login() {
    const [conCuenta, setconCuenta] = useState(true);
    const [credentials, setcredentials] = useState({ email: "", password: "" });
    const changeUser = (e) => {
        setcredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const registerUser = async()=>{
        try {
           await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
           ///accion
        } catch (error) {
            console.log(error)
        }
    }
    const iniciaUser = async()=>{
        try {
           await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
           ///accion
        } catch (error) {
            console.log(error)
        }
    }

    const verificar = ()=>{
        //validaciones de credenciales
        conCuenta?
        iniciaUser():
        registerUser();
    }
    return (
                <div className="bg-light text-center">
                    <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
                        <h4 className="card-title text-center fs-3">{conCuenta?"Iniciar sesión":"Crear Cuenta"}</h4>
                        <p className="text-center">utiliza tu cuenta preferida</p>
                        <div className="d-grid gap-2">
                            <button className="btn btn-danger"> <FontAwesomeIcon icon={["fab", "google"]} /> &nbsp; Login via Google</button>
                            <button className="btn btn-primary"> <FontAwesomeIcon icon={["fab", "facebook-f"]} /> &nbsp; Login via facebook</button>
                        </div>
                        <p className="divider-text mt-3">
                            <span className="bg-light">ó</span>
                        </p>
                        <div>
                            
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={["fa", "envelope"]} /></span>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    onChange={changeUser}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={["fa", "lock"]} /></span>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder={conCuenta?"password":"Create password"}
                                    onChange={changeUser}
                                />
                            </div>
                            <div>
                                <button className="btn btn-primary mt-2 mb-3" onClick={() => verificar()}> {conCuenta?"ingresar":"Registrarme"}</button>
                            </div>
                            {conCuenta?
                             <p>Registrate {" "}<a className="text-primary loginButton" onClick={()=>setconCuenta(false)}>aqui</a> </p>:
                             <p>tienes cuenta? <a className="text-primary loginButton" onClick={()=>setconCuenta(true)}>Log In</a> </p>    
                        }
                           
                        </div>
                    </article>
                </div>
    )
}

