import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { Box, dividerClasses, IconButton } from "@mui/material";
import { useDisplayContext } from "./Manager";
import { useMemo } from "react";

const Actions = () => {
	const { dispatchIndex, setDisplayLine, index, lines } = useDisplayContext();
	const lineNumber = useMemo(() => Object.values(lines).length - 1, [lines]);
	console.log(lines, lineNumber);
	return (
		<Box sx={{ display: "flex", gap: "7em" }}>
			<IconButton disabled={index === 0} onClick={() => dispatchIndex({ type: "decrement" })}>
				<ArrowBackIcon />
			</IconButton>
			<IconButton onClick={() => setDisplayLine(true)}>
				<CheckIcon />
			</IconButton>
			<IconButton disabled={index === lineNumber} onClick={() => dispatchIndex({ type: "increment" })}>
				<ArrowForwardIcon />
			</IconButton>
		</Box>
	);
};

export default Actions;
