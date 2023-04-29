import { Box, List, Link, NavLink } from "./Header.styled";
import { FaBookOpen } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box offset={offset}>
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
