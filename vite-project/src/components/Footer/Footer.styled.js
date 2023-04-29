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
  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  margin-bottom: 12px;
`;

export const Text = styled.p`
  text-align: center;
`;

export const Item = styled.li`
  svg {
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 35px;
    height: 35px;
    :hover {
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      color: #28a745;
    }
  }
`;
