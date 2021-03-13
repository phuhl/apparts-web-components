import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "./FormikInput";
import { If, IfElse } from "./If";
import { Formik, Form } from "formik";

describe("If renders", () => {
  test("Should render If", async () => {
    render(
      <Formik initialValues={{ test: "" }}>
        <Form>
          <InputField name="test" label="testlabel" />
          <If test={({ test }) => "bla" === test}>it is so bla</If>
        </Form>
      </Formik>
    );
    expect(screen.queryByText("it is so bla")).not.toBeInTheDocument();
    await userEvent.type(screen.getByLabelText("testlabel"), "bla");
    await userEvent.tab();
    await waitFor(() =>
      expect(screen.queryByText("it is so bla")).toBeInTheDocument()
    );
    await userEvent.clear(screen.getByLabelText("testlabel"));
    await userEvent.tab();
    await waitFor(() =>
      expect(screen.queryByText("it is so bla")).not.toBeInTheDocument()
    );
  });
  test("Should render IfElse", async () => {
    render(
      <Formik initialValues={{ test: "" }}>
        <Form>
          <InputField name="test" label="testlabel" />
          <IfElse
            test={({ test }) => "bla" === test}
            then={"yes"}
            elze={"no"}
          />
        </Form>
      </Formik>
    );
    expect(screen.queryByText("yes")).not.toBeInTheDocument();
    expect(screen.queryByText("no")).toBeInTheDocument();
    await userEvent.type(screen.getByLabelText("testlabel"), "bla");
    await userEvent.tab();
    await waitFor(() => expect(screen.queryByText("yes")).toBeInTheDocument());
    await waitFor(() =>
      expect(screen.queryByText("no")).not.toBeInTheDocument()
    );
    await userEvent.clear(screen.getByLabelText("testlabel"));
    await userEvent.tab();
    await waitFor(() =>
      expect(screen.queryByText("yes")).not.toBeInTheDocument()
    );
    await waitFor(() => expect(screen.queryByText("no")).toBeInTheDocument());
  });
});
