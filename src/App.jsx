import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Stack, BottomNavigation } from "@mui/material";
import "./App.css";
import React from "react";
import AppBarWrapper from "./AppBar";
import Display from "./Display";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
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
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Display.Context>
					<Stack sx={{ height: "100vh", maxHeight: "100vh", position: "relative", alignItems: "center" }} gap={4}>
						<AppBarWrapper />
						<Display.CharSelector />
						<Display.Lines sx={{ flexGrow: 2 }} />
						<Display.Actions sx={{ mb: 2 }} />
					</Stack>
				</Display.Context>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
