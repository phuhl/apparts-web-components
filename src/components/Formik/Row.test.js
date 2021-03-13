import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "./FormikInput";
import Row from "./Row";
import { Formik, Form } from "formik";

describe("Row renders", () => {
  test("Should render Row", async () => {
    render(
      <Formik initialValues={{ test1: "", test2: "" }}>
        <Form>
          <Row>
            <InputField name="test1" label="testlabel1" />
            <InputField name="test2" label="testlabel2" />
          </Row>
        </Form>
      </Formik>
    );
    screen.getByLabelText("testlabel1");
    screen.getByLabelText("testlabel2");
  });
});
