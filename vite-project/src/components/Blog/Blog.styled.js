import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 320px;

  img {
    margin: 0 auto;
    @media screen and (min-width: 1360px) {
      width: 670px;
      height: 460px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 768px;

    display: flex;
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
`;

export const Box = styled.div`
  padding-top: 48px;
  padding-bottom: 58px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #0284d0;
  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 59px 32px;
  }
  @media screen and (min-width: 1360px) {
    width: 690px;

    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 20px;
    padding-right: 28px;
  }
`;

export const PreTitle = styled.p`
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 32px;

  margin-bottom: 24px;
`;

export const Text = styled.p`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 315px;
  }
  @media screen and (min-width: 1360px) {
    width: 642px;
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

    border-color: #0284d0;
    background-color: white;
    color: #0284d0;
  }
`;
