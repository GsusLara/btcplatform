import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export default function Calculadora() {
  const { store } = useContext(Context);
  const [montoUSD, setMontoUSD] = useState(store.tipoCambio || "1"); // Valor inicial en USD
  const [montoBTC, setMontoBTC] = useState(store.tipoCambio ? 1 : ""); // Valor inicial en BTC

  useEffect(() => {
    // Realizar la petición fetch al API para obtener el tipo de cambio del BTC
    fetch("https://api.coincap.io/v2/assets/bitcoin")
      .then(response => response.json())
      .then(data => {
        // Extraer el precio en USD del JSON de la respuesta
        const precioUsd = data.data.priceUsd;
        store.tipoCambio = precioUsd; // Almacenar el tipo de cambio en el store para usarlo en otros componentes
        setMontoUSD(precioUsd); // Establecer el valor inicial del monto en USD
      })
      .catch(error => console.error("Error al obtener el tipo de cambio:", error));
  }, []);

  const handleUSDChange = e => {
    const inputValue = e.target.value;
    setMontoUSD(inputValue);
    setMontoBTC((parseFloat(inputValue) / store.tipoCambio).toFixed(8));
  };

  const handleBTCChange = e => {
    const inputValue = e.target.value;
    setMontoBTC(inputValue);
    setMontoUSD((parseFloat(inputValue) * store.tipoCambio).toFixed(2));
  };

  return (
    <div className="container pBox">
      <h1>Calculadora</h1>
      <div className="form-group">
        <label>Monto en USD:</label>
        <input
          type="number"
          className="form-control"
          value={montoUSD}
          onChange={handleUSDChange}
        />
      </div>
      <div className="form-group">
        <label>Monto en BTC:</label>
        <input
          type="number"
          className="form-control"
          value={montoBTC}
          onChange={handleBTCChange}
        />
      </div>
    </div>
  );
}
