import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vitest } from "vitest";
import Button from "./button";

describe("Button", () => {
  test("renders with text content and default classes", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button", "button--primary", "button--m");
  });

  test("renders with large size class", () => {
    render(<Button size="l">Large</Button>);
    const button = screen.getByRole("button", { name: "Large" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button", "button--primary", "button--l");
  });

  test("handles click events", async () => {
    const user = userEvent.setup();
    const handleClick = vitest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole("button", { name: "Click me" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
