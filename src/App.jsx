import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import "./App.css";
import Displayer from "./Display";

export default function App() {
	return (
		<div className="App">
			<CssVarsProvider value={{ mode: "Dark" }}>
				<Displayer />
			</CssVarsProvider>
		</div>
	);
}
