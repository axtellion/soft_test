import styled from "styled-components";
import bg from "../../img/images/home/showcase.jpg";

export const Box = styled.div`
  min-width: 320px;
  height: 100vh;

  padding-top: 22px;
  padding-right: 22px;
  padding-left: 22px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)),
    url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;

    padding-top: 28px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1360px) {
    width: 1360px;
    height: 100vh;

    padding-top: 48px;
    padding-right: 28px;
    padding-left: 28px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  text-align: center;
`;

export const Title = styled.h1`
  width: 250px;

  font-size: 40px;
  font-weight: 600;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 55px;
  }
`;

export const Text = styled.p`
  width: 280px;
  font-size: 26px;

  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    width: 523px;
    font-size: 40px;
  }
  @media screen and (min-width: 1360px) {
    width: 100%;
  }
`;

export const Btn = styled.button`
  width: 175px;
  height: 57px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  background-color: #28a745;
  img {
    width: 8px;
    height: 12px;
  }
`;
