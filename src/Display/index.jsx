import CharSelector from "./CharSelect";
import DisplayContext from "./Manager";
import { Stack, Card, CardActions, CardContent } from "@mui/material";
import Actions from "./Actions";
import Lines from "./Lines";

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
export default Display;
