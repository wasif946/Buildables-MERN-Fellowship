import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../components/Todo";

describe("Todo Component", () => {
  it("adds a new todo", () => {
    render(<Todo />);
    fireEvent.change(
  screen.getByPlaceholderText(/add a new task/i), 
  { target: { value: "Learn Vitest" } }
);
    fireEvent.click(screen.getByText(/add/i));
    expect(screen.getByText("Learn Vitest")).toBeInTheDocument();
  });
});
