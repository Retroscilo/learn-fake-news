import { createContext, useState, useMemo, useContext, useReducer, useEffect } from "react";
import { getLines, characterNames } from "../parser";

const DisplayContext = createContext(null);

function indexReducer(index, action) {
	switch (action.type) {
		case "increment":
			return index + 1;
		case "decrement":
			return index - 1;
		case "set":
			return action.index;
		default:
			throw new Error("Unexpected action type");
	}
}

export default function DisplayProvider({ children }) {
	const [personnage, setPersonnage] = useState("Robert");
	const [displayLine, setDisplayLine] = useState(false);
	const [index, dispatchIndex] = useReducer(indexReducer, 0);
	const names = useMemo(() => characterNames(), []);
	const lines = useMemo(() => getLines(personnage), [personnage]);

	useEffect(() => setDisplayLine(false), [index]);
	useEffect(() => dispatchIndex({ type: "set", index: 0 }), [personnage]);

	return (
		<DisplayContext.Provider value={{ personnage, setPersonnage, names, lines, displayLine, setDisplayLine, dispatchIndex, index }}>
			{children}
		</DisplayContext.Provider>
	);
}

export function useDisplayContext() {
	const display = useContext(DisplayContext);
	return display;
}
