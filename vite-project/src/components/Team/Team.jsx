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
import person1X2 from "../../img/images/team/person1@2x.jpg";
import person2 from "../../img/images/team/person2.jpg";
import person2X2 from "../../img/images/team/person2@2x.jpg";
import person3 from "../../img/images/team/person3.jpg";
import person3X2 from "../../img/images/team/person3@2x.jpg";

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
            <ListImg
              srcSet={`${person1} 1x, ${person1X2} 2x`}
              src={person1}
              alt="Person on Team"
            />
            <ListTitle>John Doe</ListTitle>
            <p>President</p>
          </li>
          <li>
            <ListImg
              srcSet={`${person2} 1x, ${person2X2} 2x`}
              src={person2}
              alt="Person on Team"
            />
            <ListTitle>Jane Doe</ListTitle>
            <p>Vice President</p>
          </li>
          <li>
            <ListImg
              srcSet={`${person3} 1x, ${person3X2} 2x`}
              src={person3}
              alt="Person on Team"
            />
            <ListTitle>Steve Smith</ListTitle>
            <p>Marketing Head</p>
          </li>
        </List>
      </div>
    </Container>
  );
};
