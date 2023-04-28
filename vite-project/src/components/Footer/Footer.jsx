import facebook from "../../img/images/footer/facebook.svg";
import linkidin from "../../img/images/footer/linkidin.svg";
import twitter from "../../img/images/footer/twitter.svg";
import youtube from "../../img/images/footer/youtube.svg";

import { Box, List, Text } from "./Footer.styled";

export const Footer = () => {
  return (
    <Box>
      <List>
        <li>
          <img src={facebook} alt="Link" />
        </li>
        <li>
          <img src={linkidin} alt="Link" />
        </li>
        <li>
          <img src={twitter} alt="Link" />
        </li>
        <li>
          <img src={youtube} alt="Link" />
        </li>
      </List>
      <Text>Copyright © 2021 - FinanceLedger</Text>
    </Box>
  );
};
