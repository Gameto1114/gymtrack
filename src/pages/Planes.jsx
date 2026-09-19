import { useFavorites } from "../context/useFavorites";
import "./Planes.css";

const plans = [
  {
    id: "basico",
    name: "Básico",
    price: "$29.900 / mes",
    features: ["Acceso a rutinas generales", "Seguimiento de progreso", "Soporte por correo"],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$59.900 / mes",
    features: [
      "Rutinas personalizadas",
      "Seguimiento nutricional",
      "Soporte prioritario 24/7",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    price: "$99.900 / mes",
    features: [
      "Entrenador personal virtual",
      "Plan de nutrición avanzado",
      "Acceso a todas las rutinas favoritas",
    ],
  },
];

function Planes() {
  const { favorites } = useFavorites();

  return (
    <>
      <section className="planes-page">
        <h1>Planes</h1>
        <p className="planes-subtitle">Elige el plan que mejor se adapte a ti.</p>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div key={plan.id} className="plan-card">
              <h3>{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button>ELEGIR PLAN</button>
            </div>
          ))}
        </div>

        <div className="favorites-section">
          <h2>Tus rutinas favoritas</h2>
          {favorites.length === 0 ? (
            <p className="no-favorites">
              Aún no has agregado rutinas a favoritos. Ve a la sección de
              Rutinas y marca las que más te gusten con la estrella.
            </p>
          ) : (
            <ul className="favorites-list">
              {favorites.map((routine) => (
                <li key={routine.id}>
                  <span className="fav-name">{routine.name}</span>
                  <span className="fav-category">{routine.category}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

export default Planes;
