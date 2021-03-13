import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "./FormikInput";
import IfDirty from "./IfDirty";
import { Formik, Form } from "formik";

describe("InputField renders", () => {
  test("Should render", async () => {
    render(
      <Formik initialValues={{ test: "" }}>
        <Form>
          <InputField name="test" label="testlabel" />
          <IfDirty>it is so dirty</IfDirty>
        </Form>
      </Formik>
    );
    expect(screen.queryByText("it is so dirty")).not.toBeInTheDocument();
    await userEvent.type(screen.getByLabelText("testlabel"), "bla");
    await userEvent.tab();
    await waitFor(() =>
      expect(screen.queryByText("it is so dirty")).toBeInTheDocument()
    );
  });
});
