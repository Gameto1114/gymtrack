import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Rutinas from "./pages/Rutinas";
import Planes from "./pages/Planes";
import Contacto from "./pages/Contacto";
import "./App.css";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rutinas" element={<Rutinas />} />
            <Route path="planes" element={<Planes />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
