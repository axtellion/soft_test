import blog from "../../img/images/home/blog.jpg";
import { Box, PreTitle, Title, Text, Btn, Container } from "./Blog.styled";

export const Blog = () => {
  return (
    <Container>
      <img src={blog} alt="Blog" />
      <Box>
        <PreTitle>April 16 2020</PreTitle>
        <Title>Blog Post One</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Text>
        <Btn>Read Our Blog</Btn>
      </Box>
    </Container>
  );
};
