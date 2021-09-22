const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			saludo:"Store Funciona"
		},
		actions: {
			setSaludo: item => {
				setStore({ saludo: item });
			}
		}
	};
};

export default getState;
