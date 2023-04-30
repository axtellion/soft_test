import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;

    display: flex;
  }
  @media screen and (min-width: 1360px) {
    width: 1360px;
    img {
      width: 670px;
    }
  }
`;

export const Box = styled.div`
  background-color: #28a745;

  padding: 79px 20px;
  @media screen and (min-width: 768px) {
    padding: 62px 32px;

    width: 400px;
  }
  @media screen and (min-width: 1360px) {
    width: 100%;
    padding-top: 80px;
    padding-bottom: 86px;
    padding-right: 28px;
    padding-left: 20px;
  }
`;

export const PreTitle = styled.p`
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 32px;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 40px;

    width: 270px;
  }
  @media screen and (min-width: 1360px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 315px;
  }
  @media screen and (min-width: 1360px) {
    width: 540px;
  }
`;

export const Btn = styled.button`
  border-radius: 5px;
  border: 1px solid white;

  background-color: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);

    border-color: #28a745;
    background-color: white;
    color: #28a745;
  }
`;
