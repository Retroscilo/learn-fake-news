import pieces from "./pieces";

const fake = pieces["fake-news"];

const splitLines = (text) => {
  return text
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => isNaN(Number(s)))
    .filter((s) => s.length);
};
const lines = splitLines(fake);

const isLineBeginning = (names, string) => {
  return (
    string.split(" – ")[1] &&
    names.some((name) => string.split(" – ")[0].includes(name))
  );
};

const isChar = (names, character, line) => {
  const _names = names.filter((name) => name.includes(character));
  return _names.some((name) => line.split(" – ")[0].includes(name));
};

export function characterNames(full = false) {
  const names = [];
  lines.map((line) => {
    const _line = line.split(" – ");
    if (
      _line.length < 2 ||
      names.indexOf(_line[0]) !== -1 ||
      (!full && _line[0].match(/\(|\)/g))
    )
      return;
    names.push(_line[0]);
  });
  return names;
}

export function getLines(character) {
  const charLines = {};
  const names = characterNames(true);
  lines.map((line, i) => {
    if (isLineBeginning(names, line) && !isChar(names, character, line)) return;
    if (isLineBeginning(names, line) && isChar(names, character, line)) {
      charLines[i] = {
        id: i,
        above: lines[i - 1],
        line: line, //.split(" – ")[1],
      };
      if (!lines[i - 1]) return;
      let above = lines[i - 1];
      let backward = 1;
      while (
        lines[i - backward - 1] &&
        !isLineBeginning(names, lines[i - backward])
      ) {
        above = lines[i - backward - 1] + "\n" + above.trim();
        backward++;
      }
      charLines[i] = {
        id: i,
        above,
        line,
      };
      return;
    }
    if (!isLineBeginning(names, line)) {
      let backward = 0;

      if (!lines[i - 1]) return;
      do {
        backward++;
        if (
          (lines[i - backward] &&
            !isLineBeginning(names, lines[i - backward])) ||
          !charLines[i - backward]
        )
          continue;
        charLines[i - backward].line += " " + line.trim();
      } while (
        lines[i - backward] &&
        !isLineBeginning(names, lines[i - backward])
      );
    }
  });

  // reset keys to be 0...n
  return Object.values(charLines).reduce(
    (prev, value, i) => ({ ...prev, [i + 1]: value }),
    {}
  );
}
