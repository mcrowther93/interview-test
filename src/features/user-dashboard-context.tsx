import { createContext, type ReactNode, useContext, useState } from "react";
import type { BadgeProps } from "../components/badge";

type FilterVariant = BadgeProps["variant"];

interface UserDashboardContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedFilter: FilterVariant | undefined;
  setSelectedFilter: (filter: FilterVariant | undefined) => void;
}

const UserDashboardContext = createContext<UserDashboardContextType | null>(null);

export function UserDashboardProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<FilterVariant>();

  return (
    <UserDashboardContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      {children}
    </UserDashboardContext.Provider>
  );
}

export function useUserDashboardContext() {
  const context = useContext(UserDashboardContext);
  if (!context) {
    throw new Error("useUserDashboardContext must be used within a UserDashboardProvider");
  }
  return context;
}
