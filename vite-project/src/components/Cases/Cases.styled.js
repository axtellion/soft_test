import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  min-width: 320px;

  padding-top: 56px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
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
`;

export const Text = styled.p`
  width: 207px;
  margin: 0 auto;

  margin-bottom: 31px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
