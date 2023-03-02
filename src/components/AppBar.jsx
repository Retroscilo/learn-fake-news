import { Box } from "@mui/material";
import ColorSwitch from "./ColorSwitch";

const AppBarWrapper = () => {
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      position="relative"
    >
      <ColorSwitch />
    </Box>
  );
};

export default AppBarWrapper;
