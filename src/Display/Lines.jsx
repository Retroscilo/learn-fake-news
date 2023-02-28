import { Box } from "@mui/material";
import { useDisplayContext } from "./Manager";

const Lines = () => {
	const { lines, index, displayLine, personnage } = useDisplayContext();
	return (
		<Box sx={{ width: "60%", minHeight: "400px" }}>
			<div>{lines[index]?.above}</div>
			<Box sx={{ mt: 3 }}>{displayLine ? lines[index].line : `${personnage} - ...`}</Box>
		</Box>
	);
};

export default Lines;
