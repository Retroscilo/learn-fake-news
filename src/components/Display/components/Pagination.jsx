import { Slider } from "@mui/material";
import { useDisplayContext } from "../context";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import useMediaQuery from "@mui/material/useMediaQuery";
import useBookmarks from "../../../lib/hooks/useBookmarks";

const Mark = ({ index }) => {
  const [isHover, setIsHover] = useState(false);
  const { dispatchIndex, index: markIndex } = useDisplayContext();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <BookmarkIcon
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => dispatchIndex({ type: "set", index })}
      fontSize={mobile ? "small" : "medium"}
      sx={{
        transform: (isHover || markIndex === index) && "scale(1.4)",
        transition: "transform .2s ease",
      }}
    />
  );
};

const Pagination = () => {
  const { index, dispatchIndex, lineCount, personnage } = useDisplayContext();
  const { bookmarks } = useBookmarks(personnage);

  function handleChange(_, index) {
    dispatchIndex({ type: "set", index });
  }

  return (
    <Slider
      step={1}
      marks={[
        { value: 1, label: 1 },
        ...(bookmarks?.map((mark) => ({
          value: mark,
          label: <Mark index={mark} />,
        })) || []),
        { value: lineCount, label: lineCount },
      ]}
      valueLabelDisplay="on"
      onChange={handleChange}
      sx={{ width: "80%", maxWidth: "800px" }}
      value={index}
      max={lineCount}
      min={1}
    />
  );
};

export default Pagination;
