import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives the text 'Delete", () => {
    test("Then it should show a button with the text Delete inside", () => {
      const text = "Delete";
      const actionOnClick = vi.fn();

      render(<Button text={text} actionOnClick={actionOnClick} />);

      const button = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
