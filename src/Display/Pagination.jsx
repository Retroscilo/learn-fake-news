import { Button, Menu, MenuItem } from "@mui/material";
import { useDisplayContext } from "./context";
import { useState } from "react";

const Pagination = () => {
	const { lines, index, dispatchIndex, lineCount } = useDisplayContext();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = index => {
		setAnchorEl(null);
		typeof index == "number" && dispatchIndex({ type: "set", index });
	};
	return (
		<>
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
				onClick={handleClick}
			>
				{`${index + 1} · ${Object.values(lines).length}`}
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{ height: 400 }}
				anchorOrigin={{
					vertical: "center",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "center",
					horizontal: "left",
				}}
			>
				{[...Array(lineCount).keys()].map(i => (
					<MenuItem onClick={() => handleClose(i)} key={i}>
						{i + 1}
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

export default Pagination;
