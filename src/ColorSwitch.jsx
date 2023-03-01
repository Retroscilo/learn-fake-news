import React from "react";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "./Theme";
import { IconButton, Box } from "@mui/material";

export default function ColorSwitch() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: "flex-end",
				bgcolor: "background.default",
				color: "text.primary",
				p: 3,
			}}
		>
			<IconButton sx={{ ml: 1 }} onClick={colorMode?.toggleColorMode} color="inherit">
				{theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Box>
	);
}
