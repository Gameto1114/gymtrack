import { useState } from "react";
import "./Contacto.css";

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <>
      <section className="contacto-page">
        <h1>Contacto</h1>
        <p className="contacto-subtitle">
          ¿Tienes dudas? Escríbenos y te responderemos pronto.
        </p>

        {enviado ? (
          <p className="contacto-success">
            ¡Gracias {form.nombre}! Tu mensaje fue enviado correctamente.
          </p>
        ) : (
          <form className="contacto-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Correo electrónico
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Mensaje
              <textarea
                name="mensaje"
                rows="5"
                value={form.mensaje}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">ENVIAR MENSAJE</button>
          </form>
        )}
      </section>
    </>
  );
}

export default Contacto;
