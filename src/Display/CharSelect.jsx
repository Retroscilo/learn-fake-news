import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useDisplayContext } from "./context";

const CharSelector = () => {
	const { personnage, setPersonnage, names, dispatchIndex, setDisplayLine } = useDisplayContext();

	function handleChange(e) {
		setDisplayLine(false);
		setPersonnage(e.target.value);
		dispatchIndex({ type: "set", index: 0 });
	}
	return (
		<FormControl>
			<InputLabel id="personnage">Personnage</InputLabel>
			<Select onChange={handleChange} sx={{ width: "200px" }} label="Personnage" labelId="personnage" value={personnage}>
				{names.map(name => (
					<MenuItem key={name} value={name}>
						{name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default CharSelector;
