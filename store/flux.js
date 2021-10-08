const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			direccion: "pendiente",
			estadoPago:0
		},
		actions: {
			pagar: () => {
				fetch("http://localhost:3000/api/facturacion", {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(result => { setStore({ direccion: result.direccion }) })
					.catch(error => console.log('error', error));
			},
			validarPago:(direccion)=>{
				
			},
			clearPago:()=>{
				setStore({ direccion: "" })
			}
		}
	};
};

export default getState;
