import CharSelector from "./CharSelect";
import DisplayContext from "./Manager";
import { Stack, Card, CardActions, CardContent } from "@mui/material";
import Actions from "./Actions";
import Lines from "./Lines";

const Display = ({}) => {
	return (
		<DisplayContext>
			<Stack alignItems={"center"} gap={5} component={"div"} sx={{ p: 4, width: "100%", color: "white" }}>
				<CharSelector sx={{ width: "80vw", marginTop: "40px" }} />
				<Lines />
				<Actions />
			</Stack>
		</DisplayContext>
	);
};

export default Display;
