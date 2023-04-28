import warning from "../../img/images/form/worning.svg";
import { Box } from "./WarningMessege.styled";

export const WarningMessege = () => {
  return (
    <Box>
      <img src={warning} alt="Warning" /> <span>This is a required field.</span>
    </Box>
  );
};
