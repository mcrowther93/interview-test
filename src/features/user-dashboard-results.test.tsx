import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Suspense } from "react";
import { ErrorBoundary } from "../components/error-boundary";
import type { User } from "../data/users";
import { createAsyncPromise, createAsyncRejectedPromise } from "../testing-utils";
import { UserDashboardResults } from "./user-dashboard-results";

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

describe("UserDashboardResults", () => {
  test("renders loading state while promise is pending", async () => {
    const promise = new Promise<User[]>(() => {});

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <UserDashboardResults fetchResultsPromise={promise} />
        </Suspense>,
      );
    });

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders error state when promise is rejected", async () => {
    const promise = createAsyncRejectedPromise<User[]>(new Error("Failed to fetch"));

    await act(async () => {
      render(
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <UserDashboardResults fetchResultsPromise={promise} />
          </Suspense>
        </ErrorBoundary>,
      );
      await promise.catch(() => {});
    });

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  test("renders users when promise resolves", async () => {
    const promise = createAsyncPromise(mockUsers);

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <UserDashboardResults fetchResultsPromise={promise} />
        </Suspense>,
      );
      await promise;
    });

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  test("renders empty state when promise resolves with no users", async () => {
    const promise = createAsyncPromise<User[]>([]);

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <UserDashboardResults fetchResultsPromise={promise} />
        </Suspense>,
      );
      await promise;
    });

    expect(
      screen.getByText("Unfortunately there are 0 results, please try again"),
    ).toBeInTheDocument();
  });

  test("filters users when a filter badge is clicked", async () => {
    const user = userEvent.setup();
    const promise = createAsyncPromise(mockUsers);

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <UserDashboardResults fetchResultsPromise={promise} />
        </Suspense>,
      );
      await promise;
    });

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();

    const filterSection = screen.getByRole("button", { name: "ADMIN" });
    await user.click(filterSection);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.queryByText("Jane Smith")).not.toBeInTheDocument();
  });

  test("resets filter when promise changes", async () => {
    const user = userEvent.setup();
    const firstPromise = createAsyncPromise(mockUsers);

    const { rerender } = await act(async () => {
      const result = render(
        <Suspense fallback={<div>Loading...</div>}>
          <UserDashboardResults fetchResultsPromise={firstPromise} />
        </Suspense>,
      );
      await firstPromise;
      return result;
    });

    await user.click(screen.getByRole("button", { name: "ADMIN" }));
    expect(screen.queryByText("Jane Smith")).not.toBeInTheDocument();

    const secondPromise = createAsyncPromise(mockUsers);

    await act(async () => {
      rerender(
        <Suspense fallback={<div>Loading...</div>}>
          <UserDashboardResults fetchResultsPromise={secondPromise} />
        </Suspense>,
      );
      await secondPromise;
    });

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
