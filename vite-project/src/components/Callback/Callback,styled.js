import styled from "styled-components";
import { Form, Field } from "formik";

export const Container = styled.div`
  margin: 0 auto;
  min-width: 320px;

  img {
    margin: 0 auto;
    @media screen and (min-width: 1360px) {
      width: 670px;
      height: 454px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    display: flex;
    padding-bottom: 40px;

    background-color: white;
  }
  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
`;

export const Box = styled.div`
  padding-top: 51px;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #f4f4f4;
  color: black;
  @media screen and (min-width: 768px) {
    width: 400px;

    padding-top: 32px;
    padding-bottom: 33px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1360px) {
    width: 690px;

    padding-top: 57px;
    padding-bottom: 77px;
    padding-left: 28px;
    padding-right: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 69px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1360px) {
    text-align: left;
  }
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

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1360px) {
    width: 100%;
  }
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

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: #2ebf4f;
  }
`;
