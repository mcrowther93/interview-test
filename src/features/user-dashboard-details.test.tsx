import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import type { User } from "../data/users";
import { UserDetails } from "./user-dashboard-details";

const mockUser: User = {
  id: 1,
  name: "John Doe",
  role: "admin",
  title: "Software Engineer",
  team: "Engineering",
  email: "john.doe@example.com",
  details: "Some details about the user.",
};

describe("UserDetails", () => {
  function setup(isOpen = true) {
    const onClose = vi.fn();
    render(<UserDetails user={mockUser} isOpen={isOpen} onClose={onClose} />);
    return { onClose };
  }

  test("renders all the details correctly when open", () => {
    setup();

    expect(screen.getByRole("dialog", { name: "John Doe details modal" })).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Engineering")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "john.doe@example.com" })).toHaveAttribute(
      "href",
      "mailto:john.doe@example.com",
    );
    expect(screen.getByText("ADMIN")).toBeInTheDocument();
    expect(screen.getByText("Some details about the user.")).toBeInTheDocument();
  });

  test("does not render when closed", () => {
    setup(false);

    expect(
      screen.queryByRole("dialog", { name: "John Doe details modal" }),
    ).not.toBeInTheDocument();
  });

  test("calls onClose when Close button is clicked", async () => {
    const user = userEvent.setup();
    const { onClose } = setup();

    await user.click(screen.getByRole("button", { name: "Close" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
