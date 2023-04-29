import {
  Container,
  PreTitle,
  Title,
  Text,
  Box,
  List,
  Foto,
} from "./Cases.styled";

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

export const Cases = () => {
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
          <li>
            <Foto
              srcSet={`${case1} 1x, ${case1X2} 2x`}
              src={case1}
              alt="Foto Team"
              media="(min-width:1360px)"
            />
          </li>
          <li>
            <Foto
              srcSet={`${case3} 1x, ${case3X2} 2x`}
              src={case3}
              alt="Foto Team"
            />
          </li>
          <li>
            <Foto
              srcSet={`${case5} 1x, ${case5X2} 2x`}
              src={case5}
              alt="Foto Team"
            />
          </li>
          <li>
            <Foto
              srcSet={`${case6} 1x, ${case6X2} 2x`}
              src={case6}
              alt="Foto Team"
            />
          </li>
          <li>
            <Foto
              srcSet={`${case2} 1x, ${case2X2} 2x`}
              src={case2}
              alt="Foto Team"
            />
          </li>
          <li>
            <Foto
              srcSet={`${case4} 1x, ${case4X2} 2x`}
              src={case4}
              alt="Foto Team"
            />
          </li>
        </List>
      </div>
    </Container>
  );
};
