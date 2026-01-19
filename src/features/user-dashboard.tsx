import { type FormEvent, Suspense, useMemo } from "react";
import Input from "../components/input";

import "./user-dashboard.css";
import Button from "../components/button";
import { ErrorBoundary } from "../components/error-boundary";
import { mockApiRequest } from "./use-user-dashboard";
import { useUserDashboardContext } from "./user-dashboard-context";
import { UserDashboardResults } from "./user-dashboard-results";

export function UserDashboard() {
  const { searchTerm, setSearchTerm, setSelectedFilter } = useUserDashboardContext();
  const fetchResultsPromise = useMemo(() => mockApiRequest(searchTerm), [searchTerm]);

  function handleSearch(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    ev.stopPropagation();
    const formData = new FormData(ev.currentTarget);
    const value = formData.get("search-term-name");
    setSearchTerm(value?.toString() ?? "");
    setSelectedFilter(undefined);
  }

  return (
    <main>
      <div className="user_dashboard-header">
        <h1 className="user_dashboard-title">
          <span className="user_dashboard-title-brand">User </span>
          <span>Dashboard</span>
        </h1>
        <form onSubmit={handleSearch}>
          <p className="text-m-medium font-color-primary">WHAT ARE YOU LOOKING FOR?</p>
          <div className="input-container">
            <Input
              placeholder="Search by name..."
              className="user_dashboard-search-input"
              name="search-term-name"
            />
            <Button size="l" type="submit" className="input-button">
              Search
            </Button>
          </div>
        </form>
      </div>

      {searchTerm && (
        <ErrorBoundary fallback={<h3>Failed to load user results.</h3>}>
          <Suspense fallback={<div>Loading</div>}>
            <UserDashboardResults fetchResultsPromise={fetchResultsPromise} />
          </Suspense>
        </ErrorBoundary>
      )}
    </main>
  );
}
