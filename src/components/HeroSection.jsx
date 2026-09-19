import { Link } from "react-router-dom";
import gym from "../assets/gym.png";
import "./Hero.css";

function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-text">

        <p className="subtitle">SUPERA TUS LÍMITES</p>

        <h1>
          TRANSFORMA <br />
          TU <span>MEJOR</span> VERSIÓN
        </h1>

        <p className="description">
          GymTrack es tu compañero para alcanzar tus objetivos.
          Descubre rutinas diseñadas para mejorar tu fuerza,
          resistencia y bienestar.
        </p>

        <Link to="/rutinas">
          <button>COMENZAR AHORA</button>
        </Link>

      </div>

      <div className="hero-image">
        <img src={gym} alt="Gym" />
      </div>

    </section>
  );
}

export default HeroSection;