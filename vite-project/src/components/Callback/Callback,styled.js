import styled from "styled-components";
import { Form, Field } from "formik";

export const Container = styled.div`
  margin: 0 auto;
  min-width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;

export const Box = styled.div`
  padding-top: 51px;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #f4f4f4;
  color: black;
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 69px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 24px;
`;

export const FormContact = styled(Form)`
  text-align: center;
`;

export const FormInput = styled(Field)`
  height: 56px;
  width: 280px;

  padding: 8px;

  background-color: #ffffff;
  color: black;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const ErrorForm = styled.div`
  color: #fa8072;
`;

export const Btn = styled.button`
  width: 155px;
  height: 57px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #28a745;
  color: white;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  :hover,
  :focus {
    color: #7fffd4;
  }
`;
