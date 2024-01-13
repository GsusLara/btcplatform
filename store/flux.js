const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			ventaBTC: 0,
			compraBTC: 0,
			ventaUSD: 0,
			compraUSD: 0,
			user: false,
			perfilUser: [{ nombre: "", apellidos: "", cedula: "", banco: "", cuenta: "", nombreCuenta: "" }]
		},
		actions: {
			updateTC: async () => {

				try {
					const respApiUSD = await fetch("https://tipodecambio.paginasweb.cr/api", {
						method: 'GET',
						redirect: 'follow'
					})

					if (!respApiUSD.ok) {
						throw new Error(`Error en la solicitud: ${respApiUSD.status} ${respApiUSD.statusText}`);

					}
					const dataDolar = await respApiUSD.json();
					setStore({ ventaUSD: dataDolar.venta });
					setStore({ compraUSD: dataDolar.compra });
				} catch (error) {
					console.error('Error:', error.message);
				}

				try {
					const respApiBTC = await fetch("https://api.blockchain.com/v3/exchange/l2/BTC-USD");
					if (!respApiBTC.ok) {
						throw new Error(`Error en la solicitud: ${respApiBTC.status} ${respApiBTC.statusText}`);
					}
					const dataBTC = await respApiBTC.json();
					setStore({ ventaBTC: dataBTC.asks[0].px })
					setStore({ compraBTC: dataBTC.bids[0].px });
				} catch (error) {
					console.error('Error:', error.message);
				}
			},
			login: (data) => {
				const { email, photoURL, uid } = data
				setStore({ user: [uid, email, photoURL] });
			},
			logout: () => {
				setStore({ user: false });
				setStore({ perfilUser: [{ nombre: "", apellidos: "", cedula: "", banco: "", cuenta: "", nombreCuenta: "" }] })
			},
			getPerfilUser: (data) => {
				setStore({ perfilUser: [data] })
			}
		}
	};
};

export default getState;
