import { render, screen } from "@testing-library/react";
import Badge from "./badge";

describe("Badge", () => {
  test("renders with text content", () => {
    render(<Badge variant="admin" title="admin" />);
    expect(screen.getByText(/admin/i)).toBeInTheDocument();
  });

  test("applies admin variant class", () => {
    render(<Badge variant="admin" title="Admin" />);
    const badge = screen.getByText("Admin");
    expect(badge).toHaveClass("badge--admin");
  });

  test("applies editor variant class", () => {
    render(<Badge variant="editor" title="Editor" />);
    const badge = screen.getByText("Editor");
    expect(badge).toHaveClass("badge--editor");
  });

  test("applies viewer variant class", () => {
    render(<Badge variant="viewer" title="Viewer" />);
    const badge = screen.getByText("Viewer");
    expect(badge).toHaveClass("badge--viewer");
  });

  test("applies guest variant class", () => {
    render(<Badge variant="guest" title="Guest" />);
    const badge = screen.getByText("Guest");
    expect(badge).toHaveClass("badge--guest");
  });

  test("applies deactivated variant class", () => {
    render(<Badge variant="deactivated" title="Deactivated" />);
    const badge = screen.getByText("Deactivated");
    expect(badge).toHaveClass("badge--deactivated");
  });
});
