import * as yup from "yup";
import useMediaQuery from "react-use-media-query-hook";
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
import contactTab from "../../img/images/home/contactTab.jpg";
import { WarningMessege } from "../Warning/WarningMessege";

const values = { name: "", email: "" };

const schema = yup.object().shape({
  name: yup.string().required(WarningMessege),
  email: yup.string().email().required(WarningMessege),
});

export const Callback = () => {
  const isPhone = useMediaQuery("(max-width: 767px)");
  const isTable = useMediaQuery("(min-width: 768px) and (max-width: 1359px)");
  const isDesctop = useMediaQuery("(min-width: 1360px)");

  const handleSubmit = (values, { resetForm }) => {
    const contactValue = values;
    console.log(contactValue);
    resetForm();
  };
  return (
    <Container id="contact">
      {isPhone && <img src={contact} alt="Man" />}
      {isTable && <img src={contactTab} alt="Man" />}
      {isDesctop && <img src={contact} alt="Man" />}
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
