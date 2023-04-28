import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import {
  FormContact,
  FormInput,
  ErrorForm,
  Btn,
  Title,
  Box,
  Container,
  Wrap,
} from "./Callback,styled";

import contact from "../../img/images/home/contact.jpg";
import { WarningMessege } from "../Warning/WarningMessege";

const values = { name: "", email: "" };

const schema = yup.object().shape({
  name: yup.string().required(WarningMessege),
  email: yup.string().email().required(WarningMessege),
});

export const Callback = () => {
  const handleSubmit = (values, { resetForm }) => {
    const contactValue = values;
    console.log(contactValue);
    resetForm();
  };
  return (
    <Container>
      <img src={contact} alt="Man" />
      <Box>
        <Title>Request Callback</Title>
        <Formik
          initialValues={values}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <FormContact>
            <Wrap>
              <label>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name" component={ErrorForm} />
              </label>
              <label>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Enter email*"
                />
                <ErrorMessage name="email" component={ErrorForm} />
              </label>
            </Wrap>
            <Btn type="submit">
              <span>Send</span>
            </Btn>
          </FormContact>
        </Formik>
      </Box>
    </Container>
  );
};
