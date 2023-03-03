import {
  createContext,
  useState,
  useMemo,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { getLines, characterNames } from "../../lib/text/parser";

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
  const [personnage, setPersonnage] = useState(
    localStorage.getItem("char") || "Robert"
  );
  const [displayLine, setDisplayLine] = useState(false);
  const [index, dispatchIndex] = useReducer(
    indexReducer,
    Number(localStorage.getItem("page")) || 0
  );
  const names = useMemo(() => characterNames(), []);
  const lines = useMemo(() => getLines(personnage), [personnage]);
  const lineCount = useMemo(() => Object.values(lines).length, [lines]);

  // Just in case
  useEffect(() => setDisplayLine(false), [index]);

  // localStorage
  useEffect(() => localStorage.setItem("page", index), [index]);
  useEffect(() => localStorage.setItem("char", personnage), [personnage]);

  return (
    <DisplayContext.Provider
      value={{
        personnage,
        setPersonnage,
        names,
        lines,
        displayLine,
        setDisplayLine,
        dispatchIndex,
        index,
        lineCount,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}

export function useDisplayContext() {
  const display = useContext(DisplayContext);
  return display;
}
