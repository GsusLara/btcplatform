const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			direccion: "",
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
				fetch(`https://cors-anywhere.herokuapp.com/https://blockchain.info/rawaddr/${direccion}`, {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
				.then(response => response.json())
				.then(result => { setStore({ estadoPago: result.final_balance }) })
				.catch(error => console.log('error', error));
			}
		}
	};
};

export default getState;
