import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, dividerClasses, IconButton } from "@mui/material";
import { useDisplayContext } from "./context";
import { useMemo } from "react";

const Actions = ({ ...props }) => {
	const { dispatchIndex, setDisplayLine, index, lines, displayLine } = useDisplayContext();
	const lineNumber = useMemo(() => Object.values(lines).length - 1, [lines]);
	const mobile = useMediaQuery(theme => theme.breakpoints.down("sm"));

	return (
		<Box {...props} sx={{ display: "flex", gap: 10, mx: 6, ...props.sx }}>
			<IconButton size={mobile ? "large" : "medium"} disabled={index === 0} onClick={() => dispatchIndex({ type: "decrement" })}>
				<ArrowBackIcon />
			</IconButton>
			<IconButton size={mobile ? "large" : "medium"} disabled={displayLine} onClick={() => setDisplayLine(true)}>
				<CheckIcon />
			</IconButton>
			<IconButton
				size={mobile ? "large" : "medium"}
				disabled={index === lineNumber}
				onClick={() => dispatchIndex({ type: "increment" })}
			>
				<ArrowForwardIcon />
			</IconButton>
		</Box>
	);
};

export default Actions;
