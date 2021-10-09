const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			direccion: "pendiente",
			monto: 0
		},
		actions: {
			pagar: async () => {
				const response = await fetch("/api/facturacion")
				const data = await response.json()
				setStore({ direccion: data.direccion })
			},


			validarPago: (recAddr) => {
				const ws = new WebSocket("wss://ws.blockchain.info/inv");
				ws.onopen = () => {
					ws.send(JSON.stringify(
						{
							"op": "addr_sub",
							"addr": recAddr
						}
					))
				}
				ws.onmessage = (message) => {
					let response = JSON.parse(message.data);
					let transacciones = response.x.out;
					for (let i = 0; i < transacciones.length; i++) {
						if (transacciones[i].addr == recAddr) {
							let montoRecibido = transacciones[i].value / 100000000;
							setStore({ monto: montoRecibido })
							setStore({ direccion: "pagado" })
						}
					}
				}
			},
			limpiarPago: () => {
				setStore({ direccion: "pendiente" })
				setStore({ monto: 0 })
			}
		}
	};
};

export default getState;
