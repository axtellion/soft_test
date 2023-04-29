import { Box, List, Link, NavLink } from "./Header.styled";
import { FaBookOpen } from "react-icons/fa";

export const Header = () => {
  return (
    <Box>
      <Link href="#home">
        <FaBookOpen />
        Finance <span>Ledger</span>
      </Link>
      <List>
        <li>
          <NavLink href="#home">Home</NavLink>
        </li>
        <li>
          <NavLink href="#about">About</NavLink>
        </li>
        <li>
          <NavLink href="#cases">Cases</NavLink>
        </li>
        <li>
          <NavLink href="#blog">Blog</NavLink>
        </li>
        <li>
          <NavLink href="#contact">Contact</NavLink>
        </li>
      </List>
    </Box>
  );
};
