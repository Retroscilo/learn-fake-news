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
				typography: {
					fontFamily: "Ubuntu, sans-serif",
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Display.Context>
					<Stack
						sx={{ height: "100vh", maxHeight: "-webkit-fill-available", position: "relative", alignItems: "center" }}
						gap={4}
					>
						<AppBarWrapper />
						<Display.CharSelector />
						<Display.Lines sx={{ flexGrow: 2 }} />
						<Display.Pagination />
						<Display.Actions sx={{ mb: 3 }} />
					</Stack>
				</Display.Context>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
