const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			direccion: "",
			estadoPago:""
		},
		actions: {
			pagar: () => {
				fetch("http://localhost:3000/api/hello", {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(result => { setStore({ direccion: result.direccion }) })
					.catch(error => console.log('error', error));
			},
			validarPago:(direccion)=>{
				fetch(`https://blockchain.info/rawaddr/${direccion}`, {
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
