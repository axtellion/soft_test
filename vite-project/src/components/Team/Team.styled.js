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
  }
`;

export const Box = styled.div`
  text-align: center;

  width: 280px;
`;

export const PreTittle = styled.p`
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 32px;

  margin-bottom: 24px;
`;

export const Text = styled.p`
  margin-bottom: 63px;

  width: 270px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  text-align: center;
`;

export const ListImg = styled.img`
  margin-bottom: 16px;
`;

export const ListTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;