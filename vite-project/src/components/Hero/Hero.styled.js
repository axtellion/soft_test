import styled from "styled-components";
import bg from "../../img/images/home/showcase.jpg";

export const Box = styled.div`
  width: 320px;
  height: 100vh;

  padding-top: 22px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)),
    url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 auto;
`;

export const TextBox = styled.div`
  width: 280px;

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
`;

export const Text = styled.p`
  font-size: 26px;

  margin-bottom: 24px;
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
