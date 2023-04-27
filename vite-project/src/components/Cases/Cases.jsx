import { Container, PreTitle, Title, Text, Box, List } from "./Cases.styled";
import case1 from "../../img/images/cases/cases1.jpg";
import case2 from "../../img/images/cases/cases2.jpg";
import case3 from "../../img/images/cases/cases3.jpg";
import case4 from "../../img/images/cases/cases4.jpg";
import case5 from "../../img/images/cases/cases5.jpg";
import case6 from "../../img/images/cases/cases6.jpg";
import case7 from "../../img/images/cases/cases7.jpg";
import case8 from "../../img/images/cases/cases8.jpg";

export const Cases = () => {
  return (
    <Container>
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
            <img src={case1} alt="Foto Team" />
          </li>
          <li>
            <img src={case2} alt="Foto Team" />
          </li>
          <li>
            <img src={case3} alt="Foto Team" />
          </li>
          <li>
            <img src={case4} alt="Foto Team" />
          </li>
          <li>
            <img src={case5} alt="Foto Team" />
          </li>
          <li>
            <img src={case6} alt="Foto Team" />
          </li>
          <li>
            <img src={case7} alt="Foto Team" />
          </li>
          <li>
            <img src={case8} alt="Foto Team" />
          </li>
        </List>
      </div>
    </Container>
  );
};
