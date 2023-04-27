import people from "../../img/images/home/people.jpg";
import { Box, PreTitle, Text, Title, Btn } from "./Specificity.styled";

export const Specificity = () => {
  return (
    <div>
      <img src={people} alt="Team" />
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
    </div>
  );
};
