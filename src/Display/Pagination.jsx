import { Button } from "@mui/material";
import { useDisplayContext } from "./context";

const Pagination = () => {
	const { lines, index } = useDisplayContext();
	return (
		<Button
			sx={{
				border: "1px solid",
				borderColor: "divider",
				p: 1,
				borderRadius: 2,
				color: "text.disabled",
				width: "90px",
				textAlign: "center",
			}}
		>{`${index + 1} · ${Object.values(lines).length}`}</Button>
	);
};

export default Pagination;
