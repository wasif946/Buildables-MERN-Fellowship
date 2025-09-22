import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { vi } from "vitest";
import MultiStepForm from "../components/form/MultiStepForm";

beforeAll(() => {
  vi.spyOn(window, "alert").mockImplementation(() => {});
});
afterAll(() => {
  window.alert.mockRestore();
});
// ✅ Clear localStorage before every test run
beforeEach(() => {
  localStorage.clear();
});

describe("MultiStepForm Component", () => {
  it("renders Step 1 by default", () => {
    render(<MultiStepForm />);
    // make sure the first-name input is visible and the step indicator exists
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    // Use getAllByText if there are multiple 'step 1 of 3' nodes in markup
    expect(screen.getAllByText(/step 1 of 3/i).length).toBeGreaterThan(0);
  });

  it("persists data to localStorage when fields change", async () => {
    render(<MultiStepForm />);
    const firstName = screen.getByLabelText(/first name/i);

    await act(async () => {
      fireEvent.change(firstName, { target: { value: "John" } });
      fireEvent.blur(firstName); // ensure RHF registers onBlur
    });

    await waitFor(() => {
      const stored = localStorage.getItem("multi-step-form");
      expect(stored).not.toBeNull();
      expect(stored).toContain("John");
    }, { timeout: 2000 });
  });

  it("navigates to Step 2 when Next is clicked", async () => {
    render(<MultiStepForm />);

    await act(async () => {
      const fn = screen.getByLabelText(/first name/i);
      const ln = screen.getByLabelText(/last name/i);
      const email = screen.getByLabelText(/email/i);

      fireEvent.change(fn, { target: { value: "John" } });
      fireEvent.blur(fn);
      fireEvent.change(ln, { target: { value: "Doe" } });
      fireEvent.blur(ln);
      fireEvent.change(email, { target: { value: "john@example.com" } });
      fireEvent.blur(email);

      fireEvent.click(screen.getByText(/next/i));
    });

    // wait for Step 2 UI to appear
    await waitFor(() => {
      // there may be multiple nodes that display step text so use getAllByText
      expect(screen.getAllByText(/step 2 of 3/i).length).toBeGreaterThan(0);
      expect(screen.getByText(/back/i)).toBeInTheDocument();
    });
  });

  it("shows validation errors when submitting empty fields", async () => {
    render(<MultiStepForm />);

    await act(async () => {
      fireEvent.click(screen.getByText(/next/i));
    });

    await waitFor(() => {
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    });
  });

  it("submits successfully when form is filled", async () => {
    render(<MultiStepForm />);

    // Step 1
    await act(async () => {
      const fn = screen.getByLabelText(/first name/i);
      const ln = screen.getByLabelText(/last name/i);
      const email = screen.getByLabelText(/email/i);

      fireEvent.change(fn, { target: { value: "John" } });
      fireEvent.blur(fn);
      fireEvent.change(ln, { target: { value: "Doe" } });
      fireEvent.blur(ln);
      fireEvent.change(email, { target: { value: "john@example.com" } });
      fireEvent.blur(email);

      fireEvent.click(screen.getByText(/next/i));
    });

    // Wait for Step 2
    await waitFor(() => {
      expect(screen.getAllByText(/step 2 of 3/i).length).toBeGreaterThan(0);
    });

    // Step 2
    await act(async () => {
      const address1 = screen.getByLabelText(/Address Line 1/i);
      const address2 = screen.getByLabelText(/Address Line 2/i);
      const city = screen.getByLabelText(/city/i);
      const state = screen.getByLabelText(/state/i);
      const zip = screen.getByLabelText(/zip/i);

      fireEvent.change(address1, { target: { value: "123 Main St" } });
      fireEvent.blur(address1);

      fireEvent.change(address2, { target: { value: "Apt 4B" } });
      fireEvent.blur(address2);
    
      fireEvent.change(city, { target: { value: "NYC" } });
      fireEvent.blur(city);
      fireEvent.change(state, { target: { value: "CA" } });
      fireEvent.blur(state);
      fireEvent.change(zip, { target: { value: "12345" } });
      fireEvent.blur(zip);

      fireEvent.click(screen.getByText(/next/i));
    });

    // Step 3
    await waitFor(() => {
      expect(screen.getAllByText(/step 3 of 3/i).length).toBeGreaterThan(0);
    });

    // Step 3 submit
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    });

    // Expect the custom modal to show up, not a window.alert
    expect(await screen.findByText(/Success!/i)).toBeInTheDocument();
  });
});
