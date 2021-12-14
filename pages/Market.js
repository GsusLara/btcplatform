import { useEffect, useContext } from "react"
import { Context } from "../store/appContext";
import { useRouter } from 'next/router'
import Layout from "../components/layout"
import MarketComponent from "../components/marketComponent"

export default function Market() {
    const { store } = useContext(Context);
    const {push} = useRouter();
    useEffect(() => {
        if(!store.user){
            push("/")
        }
    }, []);
    return (
        <Layout>
            <MarketComponent/>
        </Layout>
    )
}
