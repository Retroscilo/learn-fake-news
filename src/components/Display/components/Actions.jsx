import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, IconButton } from "@mui/material";
import { useDisplayContext } from "../context";
import { useMemo } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import useBookmarks from "../../../lib/hooks/useBookmarks";

const Actions = ({ ...props }) => {
  const {
    dispatchIndex,
    setDisplayLine,
    index,
    lines,
    displayLine,
    personnage,
  } = useDisplayContext();
  const { bookmarks, setBookmark, deleteBookmark } = useBookmarks(personnage);
  const lineNumber = useMemo(() => Object.values(lines).length - 1, [lines]);
  const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const xs = useMediaQuery("(max-width:350px)");

  function handleChange(type) {
    setDisplayLine(false);
    dispatchIndex({ type });
  }
  return (
    <Box
      {...props}
      sx={{ display: "flex", gap: xs ? 4 : 10, mx: 6, ...props.sx }}
    >
      <IconButton
        size={sm ? "large" : "medium"}
        disabled={index === 0}
        onClick={() => handleChange("decrement")}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        size={sm ? "large" : "medium"}
        disabled={displayLine}
        onClick={() => setDisplayLine(true)}
      >
        <CheckIcon />
      </IconButton>
      {!bookmarks?.includes(index) ? (
        <IconButton
          size={sm ? "large" : "medium"}
          onClick={() => setBookmark(index)}
        >
          <BookmarkAddIcon />
        </IconButton>
      ) : (
        <IconButton
          size={sm ? "large" : "medium"}
          onClick={() => deleteBookmark(index)}
        >
          <BookmarkRemoveIcon />
        </IconButton>
      )}
      <IconButton
        size={sm ? "large" : "medium"}
        disabled={index === lineNumber}
        onClick={() => handleChange("increment")}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default Actions;
