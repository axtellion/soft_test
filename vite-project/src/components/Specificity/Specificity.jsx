import useMediaQuery from "react-use-media-query-hook";
import {
  Box,
  PreTitle,
  Text,
  Title,
  Btn,
  Container,
} from "./Specificity.styled";

import people from "../../img/images/home/people.jpg";
import peopleX2 from "../../img/images/home/people@2x.jpg";
import peopleTab from "../../img/images/home/peopleTab.jpg";
import peopleTabX2 from "../../img/images/home/peopleTab2x.jpg";

export const Specificity = () => {
  const isPhone = useMediaQuery("(max-width: 767px)");
  const isTable = useMediaQuery("(min-width: 768px) and (max-width: 1359px)");
  const isDesctop = useMediaQuery("(min-width: 1360px)");

  return (
    <Container id="about">
      {isPhone && (
        <img srcSet={`${people} 1x, ${peopleX2} 2x`} src={people} alt="Team" />
      )}
      {isTable && (
        <img
          srcSet={`${people} 1x, ${peopleTabX2} 2x`}
          src={peopleTab}
          alt="Team"
        />
      )}
      {isDesctop && (
        <img srcSet={`${people} 1x, ${peopleX2} 2x`} src={people} alt="Team" />
      )}
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
