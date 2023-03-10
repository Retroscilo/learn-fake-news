import { CssBaseline, Stack } from "@mui/material";
import "./style/App.css";
import React from "react";
import AppBarWrapper from "./components/AppBar";
import Display from "./components/Display";
import ThemeProvider from "./components/Theme";

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Display.Context>
        <Stack
          sx={{
            height: "calc(var(--vh, 1vh) * 100)",
            maxHeight: "-webkit-fill-available",
            position: "relative",
            alignItems: "center",
          }}
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
  );
}
