const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			ventaUSD: 0,
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
					let ventaUSD = parseFloat(dataDolar.venta).toFixed(2)
					setStore({ ventaUSD});
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
