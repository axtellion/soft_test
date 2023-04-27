import { Box, List } from "./Header.styled";
import logo from "../../img/images/frame.svg";

export const Header = () => {
  return (
    <Box>
      <img src={logo} alt="Logo" />
      <List>
        <li>Home</li>
        <li>About</li>
        <li>Cases</li>
        <li>Blog</li>
        <li>Contact</li>
      </List>
    </Box>
  );
};
