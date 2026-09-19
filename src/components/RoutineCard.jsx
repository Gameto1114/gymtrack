import { useFavorites } from "../context/useFavorites";
import "./RoutineCard.css";

function RoutineCard({ routine }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(routine.id);

  return (
    <div className="routine-card">
      <div className="routine-card-header">
        <h3>{routine.name}</h3>
        <button
          className={`fav-btn ${favorite ? "active" : ""}`}
          onClick={() => toggleFavorite(routine)}
          aria-label={favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {favorite ? "★" : "☆"}
        </button>
      </div>

      <span className="routine-category">{routine.category}</span>
      <p className="routine-description">{routine.description}</p>
      <span className="routine-duration">{routine.duration}</span>
    </div>
  );
}

export default RoutineCard;
