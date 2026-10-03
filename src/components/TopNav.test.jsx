import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TopNav from "./TopNav";

describe("TopNav", () => {
  it("renderiza el campo de búsqueda", () => {
    render(<TopNav />);

    expect(
      screen.getByPlaceholderText(/Encuentra tu rutina ideal/i)
    ).toBeInTheDocument();
  });
});
