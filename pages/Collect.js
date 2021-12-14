import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useRouter } from 'next/router';
import Layout from "../components/layout";
import CobrarComponent from "../components/cobrarComponent";



export default function CobrarView() {
    const { store } = useContext(Context);
    const {push} = useRouter();
    useEffect(() => {
        if(!store.user){
            push("/")
        }
    }, []);
    return (
        <Layout>
            <CobrarComponent/>
        </Layout>
    )
}
