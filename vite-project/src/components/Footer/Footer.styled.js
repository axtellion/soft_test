import styled from "styled-components";

export const Box = styled.div`
  margin: 0 auto;
  min-width: 320px;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 34px;

  background-color: #333333;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  margin-bottom: 12px;
`;
