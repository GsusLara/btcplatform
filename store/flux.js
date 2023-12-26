const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			fecha: "",
			BtcColon: 0,
			BtcDolar:0,
			user: false,
			perfilUser:[{ nombre: "", apellidos: "", cedula: "", banco: "", cuenta: "", nombreCuenta: "" }]
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
				setStore({BtcDolar: btc.bitcoin.usd})
				setStore({ BtcColon: dolar.compra * btc.bitcoin.usd });
			},
			login: (data) => {
				const { email, photoURL, uid } = data
				setStore({ user: [uid, email, photoURL] });
			},
			logout:()=>{
				setStore({user:false});
				setStore({perfilUser:[{ nombre: "", apellidos: "", cedula: "", banco: "", cuenta: "", nombreCuenta: "" }]})
			},
			getPerfilUser:(data)=>{
				setStore({perfilUser:[data]})
			}
		}
	};
};

export default getState;
