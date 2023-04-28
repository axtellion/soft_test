import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  min-width: 320px;

  padding-top: 72px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: white;
  color: black;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-top: 50px;
    padding-bottom: 40px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Box = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 280px;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const PreTittle = styled.p`
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 32px;

  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Text = styled.p`
  margin-bottom: 63px;

  width: 270px;
  @media screen and (min-width: 768px) {
    width: 100%;

    margin-bottom: 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  text-align: center;

  li {
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    gap: 17px;
  }
`;

export const ListImg = styled.img`
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 223px;
    height: 148px;
  }
`;

export const ListTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;
