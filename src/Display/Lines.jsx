import { Box } from "@mui/material";
import { useDisplayContext } from "./Manager";

const Lines = ({ ...props }) => {
	const { lines, index, displayLine, personnage } = useDisplayContext();
	return (
		<Box {...props} sx={{ width: "80%", ...props.sx }}>
			<div>{lines[index]?.above}</div>
			<Box sx={{ mt: 3 }}>{displayLine ? lines[index].line : `${personnage} - ...`}</Box>
		</Box>
	);
};

export default Lines;
