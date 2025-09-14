import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "../components/Card";

describe("Card Component", () => {
  it("renders children correctly", () => {
    render(
      <Card>
        <p>Card Content</p>
      </Card>
    );
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("applies base Tailwind styles", () => {
    render(<Card>Styled Card</Card>);
    const card = screen.getByText("Styled Card");
    expect(card.className).toMatch(/bg-white/);
    expect(card.className).toMatch(/shadow-md/);
    expect(card.className).toMatch(/rounded-xl/);
  });
});
