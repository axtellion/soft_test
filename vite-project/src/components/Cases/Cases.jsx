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
import case2 from "../../img/images/cases/cases2.jpg";
import case3 from "../../img/images/cases/cases3.jpg";
import case4 from "../../img/images/cases/cases4.jpg";
import case5 from "../../img/images/cases/cases5.jpg";
import case6 from "../../img/images/cases/cases6.jpg";

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
            <Foto src={case1} alt="Foto Team" />
          </li>
          <li>
            <Foto src={case3} alt="Foto Team" />
          </li>
          <li>
            <Foto src={case5} alt="Foto Team" />
          </li>
          <li>
            <Foto src={case6} alt="Foto Team" />
          </li>
          <li>
            <Foto src={case2} alt="Foto Team" />
          </li>
          <li>
            <Foto src={case4} alt="Foto Team" />
          </li>
        </List>
      </div>
    </Container>
  );
};
