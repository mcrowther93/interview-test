import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import Modal from "./modal";

describe("Modal", () => {
  test("renders when open is true", () => {
    render(
      <Modal open={true}>
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  test("does not render when open is false", () => {
    render(
      <Modal open={false}>
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });



  test("does not call onClose when modal content is clicked", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(
      <Modal open={true} onClose={handleClose}>
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    );

    await user.click(screen.getByText("Modal content"));

    expect(handleClose).not.toHaveBeenCalled();
  });

});

describe("Modal.Header", () => {
  test("renders header content", () => {
    render(
      <Modal open={true}>
        <Modal.Header>Header content</Modal.Header>
      </Modal>
    );
    expect(screen.getByText("Header content")).toBeInTheDocument();
  });

});

describe("Modal.Body", () => {
  test("renders body content", () => {
    render(
      <Modal open={true}>
        <Modal.Body>Body content</Modal.Body>
      </Modal>
    );
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });
});

describe("Modal.Footer", () => {
  test("renders footer content", () => {
    render(
      <Modal open={true}>
        <Modal.Footer>Footer content</Modal.Footer>
      </Modal>
    );
    expect(screen.getByText("Footer content")).toBeInTheDocument();
  });
});


describe("Modal composition", () => {
  test("renders full modal with all parts", () => {
    render(
      <Modal open={true}>
        <Modal.Header>
          Hello World
        </Modal.Header>
        <Modal.Body>Are you sure you want to proceed?</Modal.Body>
        <Modal.Footer>
          <button type="button">Cancel</button>
          <button type="button">Confirm</button>
        </Modal.Footer>
      </Modal>
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
  });
});
