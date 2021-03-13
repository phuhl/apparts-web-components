import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage renders", () => {
  test("Should render", async () => {
    render(<ErrorMessage message={"text"} />);
    screen.getByText("text");
  });
  test("Should not render", async () => {
    const div = render(
      <div data-testid="custom-element">
        <ErrorMessage />
      </div>
    );
    expect(screen.getByTestId("custom-element")).toBeEmptyDOMElement();
  });
});
