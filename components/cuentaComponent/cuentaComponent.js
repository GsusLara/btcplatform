import React from 'react'

export default function CuentaComponent() {
    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
                    <span className="mt-3 mx-5">nombre@mail.com</span> 
                    <span className="fw-bold mt-3">Datos personales:</span>
                    <span>Nombre</span>
                    <span>ID</span>
                    <span>Fecha de Nacimiento</span>
                    <span className="fw-bold mt-3">Datos de venta</span>
                    <span>Banco</span>
                    <span>Iban</span>
                    <div className=" d-flex mt-5"> 
                    <button className="btn1 btn-dark">Edit Profile</button> 
                    
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
