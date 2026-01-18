import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { User } from "../data/users";
import { UserCard } from "./user-dashboard-card";

const mockUser: User = {
  id: 1,
  name: "John Doe",
  role: "admin",
  title: "Software Engineer",
  team: "Engineering",
  email: "john.doe@example.com",
  details: "Some details about the user.",
};

describe("UserCard", () => {
  function setup() {
    render(<UserCard user={mockUser} />);
  }

  test("renders all the details correctly", () => {
    setup();

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Engineering")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "john.doe@example.com" })).toHaveAttribute(
      "href",
      "mailto:john.doe@example.com",
    );
    expect(screen.getByText("ADMIN")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "View details" })).toBeInTheDocument();
  });

  test("opens user details modal when View details button is clicked", async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole("button", { name: "View details" }));

    expect(screen.getByRole("dialog", { name: "John Doe details modal" })).toBeInTheDocument();
  });

  test("closes user details modal when Close button is clicked", async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole("button", { name: "View details" }));
    expect(screen.getByRole("dialog", { name: "John Doe details modal" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(
      screen.queryByRole("dialog", { name: "John Doe details modal" }),
    ).not.toBeInTheDocument();
  });
});
