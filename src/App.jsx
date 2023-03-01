import { CssBaseline, Stack } from "@mui/material";
import "./App.css";
import React from "react";
import AppBarWrapper from "./AppBar";
import Display from "./Display";
import ThemeProvider from "./Theme";

export default function App() {
	return (
		<ThemeProvider>
			<CssBaseline />
			<Display.Context>
				<Stack sx={{ height: "100vh", maxHeight: "-webkit-fill-available", position: "relative", alignItems: "center" }} gap={4}>
					<AppBarWrapper />
					<Display.CharSelector />
					<Display.Lines sx={{ flexGrow: 2 }} />
					<Display.Pagination />
					<Display.Actions sx={{ mb: 3 }} />
				</Stack>
			</Display.Context>
		</ThemeProvider>
	);
}
