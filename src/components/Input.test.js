import React from "react";
import { render, screen } from "@testing-library/react";
import InputField from "./Input";
import userEvent from "@testing-library/user-event";

describe("Input renders", () => {
  test("Should render", async () => {
    render(<InputField name="test" label="testlabel" />);
    const input = screen.getByLabelText("testlabel");
    expect(screen.queryByText("String is missing")).not.toBeInTheDocument();
    await userEvent.type(input, "test");
    await userEvent.tab();
    await userEvent.clear(input);
  });
  test("Should render error", async () => {
    render(
      <InputField name="test" label="testlabel" error={"String is missing"} />
    );
    expect(screen.queryByText("String is missing")).toBeInTheDocument();
  });
});
