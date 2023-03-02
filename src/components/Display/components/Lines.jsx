import { Box } from "@mui/material";
import { useDisplayContext } from "../context";

const Lines = ({ ...props }) => {
  const { lines, index, displayLine, personnage } = useDisplayContext();
  return (
    <Box
      {...props}
      sx={{
        px: 5,
        width: "100%",
        maxWidth: "800px",
        ...props.sx,
        maxHeight: "100%",
        overflow: "scroll",
      }}
    >
      <div>{lines[index]?.above}</div>
      <Box sx={{ mt: 3 }}>
        {displayLine ? lines[index].line : `${personnage} - ...`}
      </Box>
    </Box>
  );
};

export default Lines;
