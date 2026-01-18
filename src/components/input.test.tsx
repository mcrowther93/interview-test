import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Inbox from "./input";

describe("Inbox", () => {
  test("handles user input", async () => {
    const user = userEvent.setup();
    render(<Inbox placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");

    await user.type(input, "Hello world");
    expect(input).toHaveValue("Hello world");
  });
});
