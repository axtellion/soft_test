import useMediaQuery from "react-use-media-query-hook";
import { Box, PreTitle, Title, Text, Btn, Container } from "./Blog.styled";

import blog from "../../img/images/home/blog.jpg";
import blogX2 from "../../img/images/home/blog@2x.jpg";
import blogTab from "../../img/images/home/blogTab.jpg";
import blogTabX2 from "../../img/images/home/blogTab2x.jpg";

export const Blog = () => {
  const isPhone = useMediaQuery("(max-width: 767px)");
  const isTable = useMediaQuery("(min-width: 768px) and (max-width: 1359px)");
  const isDesctop = useMediaQuery("(min-width: 1360px)");

  return (
    <Container id="blog">
      {isPhone && (
        <img srcSet={`${blog} 1x, ${blogX2} 2x`} src={blog} alt="Blog" />
      )}
      {isTable && (
        <img
          srcSet={`${blogTab} 1x, ${blogTabX2} 2x`}
          src={blogTab}
          alt="Blog"
        />
      )}
      {isDesctop && (
        <img srcSet={`${blog} 1x, ${blogX2} 2x`} src={blog} alt="Blog" />
      )}
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
