import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  min-width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;

    display: flex;
    flex-direction: row-reverse;
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
`;

export const Btn = styled.button`
  border-radius: 5px;
  border: 1px solid white;

  background-color: transparent;
`;
