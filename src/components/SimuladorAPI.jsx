import { useEffect, useState } from "react";
import "./SimuladorAPI.css";

function SimuladorAPI() {
  const [rutina, setRutina] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simula la respuesta de una API externa con la rutina destacada del día.
      setRutina({ nombre: "Rutina Funcional", duracion: "35 min" });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="simulador-api">
      <h3>Rutina destacada del día</h3>
      {rutina ? (
        <p>
          {rutina.nombre} — {rutina.duracion}
        </p>
      ) : (
        <p>Cargando rutina...</p>
      )}
    </div>
  );
}

export default SimuladorAPI;
