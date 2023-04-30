import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 320px;

  padding-top: 56px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: white;

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1360px) {
    width: 1360px;
    padding: 80px 28px;
  }
`;

export const Box = styled.div`
  text-align: center;

  color: black;
`;

export const PreTitle = styled.p`
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 32px;

  width: 219px;

  margin: 0 auto;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    width: 100%;
  }
`;

export const Text = styled.p`
  width: 207px;
  margin: 0 auto;

  margin-bottom: 31px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 17px;
  }
`;

export const Foto = styled.img`
  @media screen and (min-width: 768px) {
    width: 223px;
    height: 148px;
  }
  @media screen and (min-width: 1360px) {
    width: 421px;
    height: 282px;
  }
`;
