import { useEffect, useContext } from "react"
import { Context } from "../store/appContext";
import { useRouter } from 'next/router'
import Layout from "../components/layout"
import CuentaComponent from "../components/cuentaComponent"


export default function Cuenta() {
    const { store } = useContext(Context);
    const {push} = useRouter();
    useEffect(() => {
        if(!store.user){
            push("/")
        }
    }, []);
    return (
        <Layout>
            <CuentaComponent/>
        </Layout>
    )
}