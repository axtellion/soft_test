import styled from "styled-components";

export const Box = styled.div`
  margin-top: ${({ offset }) => (offset >= 120 ? "0" : "22px")};
  position: ${({ offset }) => (offset >= 120 ? "fixed" : "absolute")};
  opacity: ${({ offset }) => (offset >= 120 ? "0.8" : "1")};
  background-color: ${({ offset }) =>
    offset >= 120 ? "#008B8B" : "transparent"};

  width: 320px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 16px;

  padding-right: 22px;
  padding-left: 22px;

  z-index: 100;
  @media screen and (min-width: 768px) {
    margin-top: ${({ offset }) => (offset >= 70 ? "0" : "28px")};
    position: ${({ offset }) => (offset >= 70 ? "fixed" : "absolute")};
    opacity: ${({ offset }) => (offset >= 70 ? "0.8" : "1")};
    background-color: ${({ offset }) =>
      offset >= 70 ? "#008B8B" : "transparent"};

    height: 50px;
    width: 768px;

    justify-content: space-between;

    padding-right: 32px;
    padding-left: 32px;

    @media screen and (min-width: 1360px) {
      margin-top: ${({ offset }) => (offset >= 70 ? "0" : "48px")};

      width: 1360px;

      padding-right: 28px;
      padding-left: 28px;
    }
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #28a745;
  font-size: 28px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    padding-top: 3px;
    width: 40px;
    height: 31px;
  }

  span {
    color: white;
  }

  :hover {
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    color: #2ebf4f;
    transform: scale(1.05);

    span {
      color: #c0c0c0;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 35px;
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

export const NavLink = styled.a`
  position: relative;
  padding-bottom: 3px;

  :hover {
    color: white;

    ::after {
      content: "";
      width: 100%;
      height: 4px;
      background-color: #28a745;
      border-radius: 2px;
      position: absolute;
      left: 0;
      bottom: -1px;
    }
  }
`;
