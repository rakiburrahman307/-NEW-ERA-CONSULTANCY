import { useState, useEffect, useMemo } from "react";

const TypeAnimation = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const speed = 50; // Typing speed in ms
  const delay = 500; // Delay between each text

  const sequences = useMemo(() => ["To New Era", "Consultancy"], []);

  useEffect(() => {
    let isMounted = true;

    const typeText = async () => {
      const currentSequence = sequences[index];
      let newText = "";

      for (let i = 0; i < currentSequence.length; i++) {
        if (!isMounted) return;
        newText += currentSequence[i];
        setText(newText);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }

      await new Promise((resolve) => setTimeout(resolve, delay));

      setIndex((prevIndex) => (prevIndex + 1) % sequences.length);
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, [index, sequences]);

  return (
    <h2 className="text-xl md:text-4xl font-bold text-left" style={{ fontSize: "60px" }}>
      Welcome <br />
      {text.includes("Consultancy") ? (
        <>
          To New Era <span className="text-orange-500">Consultancy</span>
        </>
      ) : (
        text
      )}
    </h2>
  );
};

export default TypeAnimation;
