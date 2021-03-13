import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button renders", () => {
  test("Should render", async () => {
    render(<Button>test</Button>);
    const button = screen.getByRole("button", { name: "test" });
    expect(button).toBeEnabled();
  });
  test("Should be disabled", async () => {
    render(<Button disabled>test</Button>);
    const button = screen.getByRole("button", { name: "test" });
    expect(button).toBeDisabled();
  });
  test("Should be disabled on loading", async () => {
    render(<Button loading>test</Button>);
    const button = screen.getByRole("button", { name: "test" });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("loading");
  });
  test("Should be submit button", async () => {
    render(<Button submit>test</Button>);
    const button = screen.getByRole("button", { name: "test" });
    expect(button.type).toBe("submit");
    expect(button).toHaveClass("submit");
  });
});
