import {
  Box,
  Container,
  List,
  PreTittle,
  Text,
  Title,
  ListTitle,
  ListImg,
} from "./Team.styled";

import person1 from "../../img/images/team/person1.jpg";
import person2 from "../../img/images/team/person2.jpg";
import person3 from "../../img/images/team/person3.jpg";

export const Team = () => {
  return (
    <Container>
      <Box>
        <PreTittle>Who we are</PreTittle>
        <Title>Our Professional Team</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </Text>
      </Box>
      <div>
        <List>
          <li>
            <ListImg src={person1} alt="Person on Team" />
            <ListTitle>John Doe</ListTitle>
            <p>President</p>
          </li>
          <li>
            <ListImg src={person2} alt="Person on Team" />
            <ListTitle>Jane Doe</ListTitle>
            <p>Vice President</p>
          </li>
          <li>
            <ListImg src={person3} alt="Person on Team" />
            <ListTitle>Steve Smith</ListTitle>
            <p>Marketing Head</p>
          </li>
        </List>
      </div>
    </Container>
  );
};
