import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!text || text.length === 0) return;

    if (charIndex < text[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }

    if (textIndex < text.length - 1) {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => prev + 1);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [text, speed, charIndex, textIndex]);

  return <span>{displayedText}</span>;
};

export default Typewriter;