import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Box, List, Text, Item } from "./Footer.styled";

export const Footer = () => {
  return (
    <Box>
      <List>
        <Item>
          <a href="https://www.facebook.com/" target="_blanck">
            <FaFacebook />
          </a>
        </Item>
        <Item>
          <a href="https://twitter.com/?lang=uk" target="_blanck">
            <FaTwitter />
          </a>
        </Item>
        <Item>
          <a href="https://www.youtube.com/" target="_blanck">
            <FaYoutube />
          </a>
        </Item>
        <Item>
          <a href="https://www.linkedin.com/in/anton-honchar/" target="_blanck">
            <FaLinkedinIn />
          </a>
        </Item>
      </List>
      <Text>Copyright &copy; 2021 - FinanceLedger</Text>
    </Box>
  );
};
