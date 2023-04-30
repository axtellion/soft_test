import { useState } from "react";
import {
  Container,
  PreTitle,
  Title,
  Text,
  Box,
  List,
  Foto,
} from "./Cases.styled";

import { Modal } from "../Modal/Modal";

import case1 from "../../img/images/cases/cases1.jpg";
import case1X2 from "../../img/images/cases/cases1@2x.jpg";
import case2 from "../../img/images/cases/cases2.jpg";
import case2X2 from "../../img/images/cases/cases2@2x.jpg";
import case3 from "../../img/images/cases/cases3.jpg";
import case3X2 from "../../img/images/cases/cases3@2x.jpg";
import case4 from "../../img/images/cases/cases4.jpg";
import case4X2 from "../../img/images/cases/cases4@2x.jpg";
import case5 from "../../img/images/cases/cases5.jpg";
import case5X2 from "../../img/images/cases/cases5@2x.jpg";
import case6 from "../../img/images/cases/cases6.jpg";
import case6X2 from "../../img/images/cases/cases6@2x.jpg";

const cart = [
  { url: case1, largeUrl: case1X2, alt: "Image Cases" },
  { url: case2, largeUrl: case2X2, alt: "Image Cases" },
  { url: case3, largeUrl: case3X2, alt: "Image Cases" },
  { url: case4, largeUrl: case4X2, alt: "Image Cases" },
  { url: case5, largeUrl: case5X2, alt: "Image Cases" },
  { url: case6, largeUrl: case6X2, alt: "Image Cases" },
];

export const Cases = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handelClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.url);
  };

  const handelRotationRight = () => {
    const totalLength = cart.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = cart[0].url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = cart.filter((item) => {
      return cart.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = cart.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = cart[totalLength - 1].url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = cart.filter((item) => {
      return cart.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <Container id="cases">
      <Box>
        <PreTitle>This is what we do</PreTitle>
        <Title>Business Cases</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </Text>
      </Box>
      <div>
        <List>
          {cart.map((item, index) => {
            return (
              <li key={index}>
                <Foto
                  src={item.url}
                  alt="Foto Team"
                  onClick={() => handelClick(item, index)}
                />
              </li>
            );
          })}
        </List>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </Container>
  );
};
