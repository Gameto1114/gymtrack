import { useState } from "react";
import RoutineCard from "../components/RoutineCard";
import routines from "../data/routines";
import "./Rutinas.css";

function Rutinas() {
  const [query, setQuery] = useState("");

  const filteredRoutines = routines.filter((routine) => {
    const search = query.toLowerCase();
    return (
      routine.name.toLowerCase().includes(search) ||
      routine.category.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <section className="rutinas-page">
        <h1>Rutinas</h1>
        <p className="rutinas-subtitle">
          Encuentra la rutina perfecta para tu objetivo.
        </p>

        <input
          type="text"
          className="search-input"
          placeholder="Buscar rutina por nombre o categoría..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="routines-grid">
          {filteredRoutines.length > 0 ? (
            filteredRoutines.map((routine) => (
              <RoutineCard key={routine.id} routine={routine} />
            ))
          ) : (
            <p className="no-results">
              No se encontraron rutinas para "{query}".
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default Rutinas;
