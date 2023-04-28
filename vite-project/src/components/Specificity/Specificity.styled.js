import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  min-width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;

    display: flex;
  }
`;

export const Box = styled.div`
  background-color: #28a745;

  padding: 79px 20px;
  @media screen and (min-width: 768px) {
    padding: 62px 32px;

    width: 400px;
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
`;

export const Text = styled.p`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 315px;
  }
`;

export const Btn = styled.button`
  border-radius: 5px;
  border: 1px solid white;

  background-color: transparent;
`;
