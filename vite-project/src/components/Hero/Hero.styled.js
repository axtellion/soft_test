import styled from "styled-components";
// import bg from "../../img/images/home/showcase.jpg";

import bgMob from "../../img/images/hero/bg_mob.jpg";
import bgMobX2 from "../../img/images/hero/bg_mob2x.jpg";
import bgTab from "../../img/images/hero/bg_tab.jpg";
import bgTabX2 from "../../img/images/hero/bg_tab2x.jpg";
import bgDes from "../../img/images/hero/bg_des.jpg";
import bgDesX2 from "../../img/images/hero/bg_des2x.jpg";

export const Box = styled.div`
  width: 320px;
  height: 533px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)),
    url(${bgMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 auto;

  @media (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)),
      url(${bgMobX2});
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)),
      url(${bgTab});
  }

  @media screen and (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)),
      url(${bgTabX2});
  }

  @media screen and (min-width: 1360px) {
    width: 1360px;
    height: 768px;

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)),
      url(${bgDes});
  }

  @media screen and (min-width: 1360px) and (min-resolution: 2dppx) {
  .hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)),  url(${bgDesX2});
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  text-align: center;
`;

export const Title = styled.h1`
  width: 250px;

  font-size: 40px;
  font-weight: 600;

  margin-top: 160px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 55px;

    margin-top: 378px;
  }
  @media screen and (min-width: 1360px) {
    margin-top: 272px;
  }
`;

export const Text = styled.p`
  width: 280px;
  font-size: 26px;

  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    width: 523px;
    font-size: 40px;
  }
  @media screen and (min-width: 1360px) {
    width: 100%;
  }
`;

export const Btn = styled.button`
  width: 175px;
  height: 57px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  background-color: #28a745;
  border: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  img {
    width: 8px;
    height: 12px;
  }
  :hover {
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: #2ebf4f;
  }
`;
