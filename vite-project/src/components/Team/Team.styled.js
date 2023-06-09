import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 320px;

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
  @media screen and (min-width: 1360px) {
    width: 1360px;

    padding-top: 80px;
    padding-bottom: 88px;
    padding-left: 28px;
    padding-right: 28px;
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
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
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
  @media screen and (min-width: 1360px) {
    margin-bottom: 36px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  text-align: center;

  li {
    position: relative;
    margin: 0 auto;

    svg {
      opacity: 0;
    }
    :hover {
      transform: scale(1.07);
      box-shadow: 12px 13px 52px -15px rgba(0, 0, 0, 0.75);
      opacity: 0.6;

      svg {
        opacity: 0.8;
      }
    }
  }
  @media screen and (min-width: 768px) {
    gap: 17px;
  }
  @media screen and (min-width: 1360px) {
    gap: 20px;
  }
`;

export const ListImg = styled.img`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 223px;
    height: 148px;
  }
  @media screen and (min-width: 1360px) {
    width: 421px;
    height: 287px;
  }
`;

export const ListTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SocialBox = styled.div`
  position: absolute;
  left: 20px;
  top: 250px;
  z-index: 1;

  width: 100%;

  display: flex;
  gap: 30px;

  svg {
    cursor: pointer;

    color: #ffffff;

    width: 30px;
    height: 30px;
    :hover {
      color: #28a745;
    }
  }
`;
