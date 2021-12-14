const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			fecha: "",
			tcBtc: 0,
			user: [],
		},
		actions: {
			updateCambios: async () => {
				let dolar;
				let btc;

				try {
					dolar = await fetch("https://tipodecambio.paginasweb.cr/api", {
						method: 'GET',
						redirect: 'follow'
					})
						.then((response) => {
							if (!response.ok) {
								throw new Error("no se obtuvo el dato")
							}
							return response.json();
						});
				} catch (e) {
					console.log("error en el fetch");
					throw e;
				}
				try {
					btc = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", {
						method: 'GET',
						redirect: 'follow'
					})
						.then((response) => {
							if (!response.ok) {
								throw new Error("no se obtuvo el dato btc")
							}
							return response.json();
						});
				} catch (e) {
					console.log("error en el fetch btc");
					throw e;
				}
				setStore({ fecha: dolar.fecha });
				setStore({ tcBtc: dolar.compra * btc.bitcoin.usd });
			},
			login: (data) => {
				const { email, photoURL, uid } = data
				setStore({ user: [uid, email, photoURL] });
			},
			logout:()=>{
				setStore({user:[]})
			}
		}
	};
};

export default getState;
