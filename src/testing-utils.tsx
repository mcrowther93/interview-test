import { type RenderOptions, type RenderResult, render } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import { UserDashboardProvider } from "./features/user-dashboard-context";

export function createAsyncPromise<T>(value: T): Promise<T> {
  return new Promise((resolve) => {
    queueMicrotask(() => resolve(value));
  });
}

export function createAsyncRejectedPromise<T>(error: Error): Promise<T> {
  return new Promise((_, reject) => {
    queueMicrotask(() => reject(error));
  });
}

export function DashboardProviderWrapper({ children }: { children: ReactNode }) {
  return <UserDashboardProvider>{children}</UserDashboardProvider>;
}

export function renderWithDashboardProvider(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): RenderResult {
  return render(ui, { wrapper: DashboardProviderWrapper, ...options });
}
