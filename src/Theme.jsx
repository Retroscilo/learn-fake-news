import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Theme = ({ children }) => {
	const [mode, setMode] = React.useState("dark");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
				typography: {
					fontFamily: "Ubuntu, sans-serif",
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default Theme;
