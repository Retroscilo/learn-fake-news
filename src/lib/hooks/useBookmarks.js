import { useState, useEffect } from "react";

/**
 * @param {string} personnage
 * @returns {{ bookmarks, setBookmark, deleteBookmark }}
 */
const useBookmark = (personnage) => {
  const [bookmarks, setBookmarks] = useState(getBookmarks(personnage));

  /**
   * @param {number} index
   * @param {string?} _personnage optionnal if initialized with a character
   */
  const setBookmark = (index, _personnage = personnage) => {
    const _bookmarks = getBookmarks(null);
    if (!_personnage || _bookmarks?.[_personnage]?.includes(index))
      return console.error("Personnage non précisé ou index déjà sauvegardé.");
    localStorage.setItem(
      "bookmarks",
      JSON.stringify({
        ..._bookmarks,
        [_personnage]: [...(_bookmarks?.[_personnage] || []), index],
      })
    );
    window.dispatchEvent(new Event("storage"));
  };

  /**
   * Return localStorage or char related bookmark if param is filled
   * @param {string?} _personnage
   * @returns {BookmarkMap|Bookmarks}
   */
  function getBookmarks(_personnage = personnage) {
    const _bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    return _personnage ? _bookmarks?.[_personnage] : _bookmarks;
  }

  /**
   * @param {number} index
   * @param {string?} _personnage optionnal if initialized with a character
   */
  const deleteBookmark = (index, _personnage = personnage) => {
    const _bookmarks = getBookmarks(null);
    localStorage.setItem(
      "bookmarks",
      JSON.stringify({
        ..._bookmarks,
        [_personnage]: _bookmarks?.[_personnage].filter((i) => i !== index),
      })
    );
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    function render() {
      setBookmarks(getBookmarks(personnage));
    }
    window.addEventListener("storage", render);
    return () => window.removeEventListener("storage", render);
  });

  useEffect(() => setBookmarks(getBookmarks(personnage)), [personnage]);

  return { bookmarks: bookmarks || [], setBookmark, deleteBookmark };
};

export default useBookmark;
