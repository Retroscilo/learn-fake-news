import { AppBar, Toolbar, Box } from "@mui/material";
import ColorSwitch from "./ColorSwitch";

const AppBarWrapper = () => {
	return (
		<AppBar sx={{ justifyContent: "flex-end" }} position="relative">
			<ColorSwitch />
		</AppBar>
	);
};

export default AppBarWrapper;
