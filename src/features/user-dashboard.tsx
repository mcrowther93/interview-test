import { useState } from "react";
import type { BadgeProps } from "../components/badge";
import Badge from "../components/badge";
import Input from "../components/input";

import "./user-dashboard.css";
import Button from "../components/button";

type Filter = {
  name: string;
  variant: BadgeProps["variant"];
};
const filters: Filter[] = [
  { variant: "admin", name: "ADMIN" },
  { variant: "editor", name: "EDITOR" },
  { variant: "viewer", name: "VIEWER" },
  { variant: "guest", name: "GUEST" },
  { variant: "deactivated", name: "OWNER" },
  { variant: "deactivated", name: "INACTIVE" },
];

export function UserDashboard() {
  const [_selectedFilter, setSelectedFilter] = useState<Filter["variant"]>();

  function onFilterSelect(filter: Filter["variant"]) {
    setSelectedFilter(filter);
  }

  return (
    <main>
      <h1 className="user_dashboard-title">
        <span className="user_dashboard-title-brand">User </span>
        <span className="font-secondary">Dashboard</span>
      </h1>
      <div>
        <p className="text-m-medium font-primary">WHAT ARE YOU LOOKING FOR?</p>
        <div className="input-container">
          <Input placeholder="Search by name..."  className="user_dashboard-search-input" />
          <Button type="button" className="input-button">
            Search
          </Button>
        </div>
      </div>

      <div className="user_dashboard-filter">
        <div className="text-s font-primary">FILTER BY:</div>
        {filters.map(({ name, variant }) => (
          <Badge key={name} onClick={() => onFilterSelect(variant)} variant={variant}>
            {name}
          </Badge>
        ))}
      </div>
      <hr />
    </main>
  );
}
