import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import InputField from "./FormikInput";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";

import * as yup from "yup";

describe("FormikInput renders", () => {
  test("Should render", async () => {
    render(
      <Formik
        initialValues={{ test: "" }}
        validationSchema={yup.object({
          test: yup.string().required("String is missing"),
        })}
      >
        <Form>
          <InputField name="test" label="testlabel" />
        </Form>
      </Formik>
    );
    const input = screen.getByLabelText("testlabel");
    expect(screen.queryByText("String is missing")).not.toBeInTheDocument();
    await userEvent.type(input, "test");
    await userEvent.tab();
    await userEvent.clear(input);
    await waitFor(() =>
      expect(screen.queryByText("String is missing")).toBeInTheDocument()
    );
  });
});
