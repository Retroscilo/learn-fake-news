import CharSelector from "./components/CharSelect";
import DisplayContext from "./context";
import { Stack } from "@mui/material";
import Actions from "./components/Actions";
import Lines from "./components/Lines";
import Pagination from "./components/Pagination";

const Display = ({ ...props }) => {
  return (
    <Stack
      {...props}
      alignItems={"center"}
      gap={5}
      component={"div"}
      sx={{ width: "100%", p: 4, flexShrink: 0, height: "100%", ...props.sx }}
    >
      <DisplayContext>
        <CharSelector sx={{ width: "80vw", marginTop: "40px" }} />
        <Lines />
        <Actions />
      </DisplayContext>
    </Stack>
  );
};

Display.Actions = Actions;
Display.Lines = Lines;
Display.CharSelector = CharSelector;
Display.Context = DisplayContext;
Display.Pagination = Pagination;
export default Display;
