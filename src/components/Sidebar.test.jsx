import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("muestra el nombre del usuario logueado", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </AuthProvider>
    );

    expect(screen.getByText(/Carlos Gómez/i)).toBeInTheDocument();
  });
});
