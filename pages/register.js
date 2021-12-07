import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../store/firebaseConfig"
import { useRouter } from 'next/router'

export default function Register() {
    const { push } = useRouter()
    const [credentials, setcredentials] = useState({ email: "", password: "" })
    const changeUser = (e) => {
        setcredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const registerUser = async()=>{
        try {
           await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
           push("/");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-4 bg-light text-center">
                    <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free account</p>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary"> <FontAwesomeIcon icon={["fab", "twitter"]} /> &nbsp; Login via Twitter</button>
                            <button className="btn btn-primary"> <FontAwesomeIcon icon={["fab", "facebook-f"]} /> &nbsp; Login via facebook</button>
                        </div>
                        <p className="divider-text mt-3">
                            <span className="bg-light">OR</span>
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
                                    placeholder="Create password"
                                    onChange={changeUser}
                                />
                            </div>
                            <div>
                                <button className="btn btn-primary " onClick={() => registerUser()}> Create Account  </button>
                            </div>
                            <p className="mt-2">Have an account? <a href="">Log In</a> </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}
