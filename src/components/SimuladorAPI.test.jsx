import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SimuladorAPI from "./SimuladorAPI";

describe("SimuladorAPI", () => {
  it("muestra la rutina destacada una vez termina de cargar", async () => {
    render(<SimuladorAPI />);

    expect(await screen.findByText(/Rutina Funcional/i)).toBeInTheDocument();
  });
});
