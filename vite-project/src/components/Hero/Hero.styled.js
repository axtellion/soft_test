import styled from "styled-components";
import bg from "../../img/images/home/showcase.jpg";

export const Box = styled.div`
  width: 320px;
  height: 100vh;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)),
    url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
  }

  @media screen and (min-width: 1360px) {
    width: 1360px;
    height: 100vh;
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

  margin-top: 160px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 55px;

    margin-top: 378px;
  }
  @media screen and (min-width: 1360px) {
    margin-top: 272px;
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
  border: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  img {
    width: 8px;
    height: 12px;
  }
  :hover {
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: #2ebf4f;
  }
`;
