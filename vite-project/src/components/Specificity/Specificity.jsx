import useMediaQuery from "react-use-media-query-hook";
import people from "../../img/images/home/people.jpg";
import peopleTab from "../../img/images/home/peopleTab.jpg";
import {
  Box,
  PreTitle,
  Text,
  Title,
  Btn,
  Container,
} from "./Specificity.styled";

export const Specificity = () => {
  const isPhone = useMediaQuery("(max-width: 767px)");
  const isTable = useMediaQuery("(min-width: 768px) and (max-width: 1359px)");
  const isDesctop = useMediaQuery("(min-width: 1360px)");

  return (
    <Container id="about">
      {isPhone && <img src={people} alt="Team" />}
      {isTable && <img src={peopleTab} alt="Team" />}
      {isDesctop && <img src={people} alt="Team" />}
      <Box>
        <PreTitle>What you are looking for</PreTitle>
        <Title>We provide bespoke solutions</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Text>
        <Btn>Read More</Btn>
      </Box>
    </Container>
  );
};
