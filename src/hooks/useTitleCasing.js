import { useState } from "react";

export function useTitleCasing(title) {
  const [words, setWords] = useState(title.split(" "));
  const [capitalizedWords, setCapitalizedWords] = useState(
    words.map((word) => {
      if (word.length === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
  );
  const [finalTitle, setFinalTitle] = useState(capitalizedWords.join(" "));

  return { words, capitalizedWords, finalTitle };
}
