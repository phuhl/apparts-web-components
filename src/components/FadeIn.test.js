import React from "react";
import { render, screen } from "@testing-library/react";
import FadeIn from "./FadeIn";

describe("FadeIn renders", () => {
  test("Should render", async () => {
    render(<FadeIn>test</FadeIn>);
  });
});
