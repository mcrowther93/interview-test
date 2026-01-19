import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import type { User } from "../data/users";
import { createAsyncPromise, renderWithDashboardProvider } from "../testing-utils";
import * as useUserDashboard from "./use-user-dashboard";
import { UserDashboard } from "./user-dashboard";

const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    role: "admin",
    title: "Software Engineer",
    team: "Engineering",
    email: "john.doe@example.com",
    details: "Some details about the user.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "editor",
    title: "Product Designer",
    team: "Design",
    email: "jane.smith@example.com",
    details: "Some details about the user.",
  },
];

describe("UserDashboard", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("renders the dashboard header and search form", () => {
    renderWithDashboardProvider(<UserDashboard />);

    expect(screen.getByText("User")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("WHAT ARE YOU LOOKING FOR?")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search by name...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  test("displays users when search resolves", async () => {
    const user = userEvent.setup();
    const promise = createAsyncPromise(mockUsers);
    vi.spyOn(useUserDashboard, "mockApiRequest").mockReturnValue(promise);

    renderWithDashboardProvider(<UserDashboard />);

    const searchInput = screen.getByPlaceholderText("Search by name...");
    const searchButton = screen.getByRole("button", { name: "Search" });

    await user.type(searchInput, "John");

    await act(async () => {
      await user.click(searchButton);
      await promise;
    });

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  test("displays empty state when search returns no results", async () => {
    const user = userEvent.setup();
    const promise = createAsyncPromise<User[]>([]);
    vi.spyOn(useUserDashboard, "mockApiRequest").mockReturnValue(promise);

    renderWithDashboardProvider(<UserDashboard />);

    const searchInput = screen.getByPlaceholderText("Search by name...");
    const searchButton = screen.getByRole("button", { name: "Search" });

    await user.type(searchInput, "NonExistent");

    await act(async () => {
      await user.click(searchButton);
      await promise;
    });

    expect(
      screen.getByText("Unfortunately there are 0 results, please try again"),
    ).toBeInTheDocument();
  });
});
