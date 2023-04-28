import styled from "styled-components";

export const Box = styled.div`
  height: 70px;
  width: 300px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  margin-bottom: 62px;

  @media screen and (min-width: 768px) {
    height: 50px;
    width: 100%;

    justify-content: space-between;

    margin-bottom: 314px;
    @media screen and (min-width: 1360px) {
      margin-bottom: 183px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
  @media screen and (min-width: 1360px) {
    gap: 40px;
  }
`;
