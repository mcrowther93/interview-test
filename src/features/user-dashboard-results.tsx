import { use, useState } from "react";
import Badge, { type BadgeProps } from "../components/badge";
import { UserCard } from "./user-dashboard-card";

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

export function UserDashboardResults({
  fetchResultsPromise,
}: {
  fetchResultsPromise: Promise<User[]>;
}) {
  const users = use(fetchResultsPromise);
  const [selectedFilter, setSelectedFilter] = useState<Filter["variant"]>();

  function onFilterSelect(filter: Filter["variant"]) {
    setSelectedFilter(filter);
  }

  if (users.length < 1) {
    return <h3>Unfortunatey there are 0 results, please try again</h3>;
  }

  const filteredUsers = selectedFilter
    ? users.filter((user) => user.role === selectedFilter)
    : users;

  return (
    <>
      <div className="user_dashboard-filter">
        <div className="text-s font-primary">FILTER BY:</div>
        {filters.map(({ name, variant }) => (
          <Badge
            key={name}
            onClick={() => onFilterSelect(variant)}
            variant={variant}
            title={name}
          />
        ))}
      </div>
      <hr />

      <div className="user_dashboard--results">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
