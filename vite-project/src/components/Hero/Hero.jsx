import { Header } from "../Header/Header";
import { Box, Title, TextBox, Text, Btn } from "./Hero.styled";

import next from "../../img/images/vector.svg";

export const Hero = () => {
  return (
    <Box id="home">
      <Header />
      <TextBox>
        <Title>The Sky Is The Limit</Title>
        <Text>We provide world class financial assistance</Text>
        <Btn>
          <img src={next} alt="Aroow" /> <span>Read More</span>
        </Btn>
      </TextBox>
    </Box>
  );
};
