import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Box, List, Text, Item } from "./Footer.styled";

export const Footer = () => {
  return (
    <Box>
      <List>
        <Item>
          <FaFacebook />
        </Item>
        <Item>
          <FaTwitter />
        </Item>
        <Item>
          <FaYoutube />
        </Item>
        <Item>
          <FaLinkedinIn />
        </Item>
      </List>
      <Text>Copyright © 2021 - FinanceLedger</Text>
    </Box>
  );
};
