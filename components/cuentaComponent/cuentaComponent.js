import { useContext } from "react";
import { Context } from "../../store/appContext";
import { db } from "../../store/firebaseConfig"
import { getFirestore } from "firebase/firestore"

export default function CuentaComponent() {
    const { store } = useContext(Context);
    
    return (
        <div className="container rounded bg-white mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 "><img className="rounded-circle " width="150px" src={store.user[2]?store.user[2]:"/perfil.png"}/><span className="text-black-50">{store.user[1]}</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Configuración de perfil</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">Nombre</label><input type="text" className="form-control" placeholder="Ingrese su nombre" defaultValue=""/></div>
                            <div className="col-md-6"><label className="labels">Apellidos</label><input type="text" className="form-control" placeholder="Ingrese sus Apellidos" defaultValue="" /></div>
                            <div className="col-md-6"><label className="labels">Número de ID</label><input type="text" className="form-control" placeholder="Cedula u otra ID" defaultValue="" /></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                            <h4 className="text-right">Información bancaria</h4>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels mt-1">Entidad bancaria</label><input type="text" className="form-control" placeholder="Nombre del Banco" defaultValue="" /></div>
                            <div className="col-md-12"><label className="labels mt-1">Cuenta Iban</label><input type="text" className="form-control" placeholder="Numero de cuenta Iban" defaultValue="" /></div>
                            <div className="col-md-12"><label className="labels mt-1">Titular de la cuenta</label><input type="text" className="form-control" placeholder="Nombre del titular de la cuenta bancaria" defaultValue="" /></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                            <h4 className="text-right">Validación de cuenta</h4>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Documento de identidad</label><input type="file" className="form-control" /></div>
                        </div>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="text-right">Historial de transacciones</h4>
                        </div>
                        <div className="card">
                            <div className="p-3">
                                <h3 className="card-title">venta</h3>
                                <h6 className="card-subtitle mb-2 text-muted">Finalizada</h6>
                                <p className="card-text">
                                    bcr-305105442154000 <br />
                                    14-12-2021 <br />
                                    ₡35000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
