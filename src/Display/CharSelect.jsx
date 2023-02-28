import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useDisplayContext } from "./context";

const CharSelector = () => {
	const { personnage, setPersonnage, names } = useDisplayContext();

	return (
		<FormControl>
			<InputLabel id="personnage">Personnage</InputLabel>
			<Select
				onChange={e => setPersonnage(e.target.value)}
				sx={{ width: "200px" }}
				label="Personnage"
				labelId="personnage"
				value={personnage}
			>
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
