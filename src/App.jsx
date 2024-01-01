import React, { useState , useEffect} from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

function App() {
  const [text, setText] = useState("");
  const butVal = [
    "CA",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(text);
        setText(result);
      } catch (error) {
        setText("Error");
      }
    } else if (value === "CA") {
      setText("");
    } else if (value === "C") {
      setText((prevText) => prevText.slice(0, -1));
    } else {
      setText((prevText) => prevText + value);
    }
  };

  // const handleKeyDown = (e) => {
  //   const keyPressed = e.key;

  //   // Handle numeric and operator keys
  //   if (
  //     /\d/.test(keyPressed) ||
  //     ["+", "-", "*", "/", ".", "%"].includes(keyPressed)
  //   ) {
  //     handleButtonClick(keyPressed);
  //   }

  //   // Handle "Enter" key as "="
  //   if (keyPressed === "Enter") {
  //     handleButtonClick("=");
  //   }

  //   // Handle "Backspace" key as "C"
  //   if (keyPressed === "Backspace") {
  //     handleButtonClick("C");
  //   }

  //   // Handle "Delete" key as "CA"
  //   if (keyPressed === "Delete") {
  //     handleButtonClick("CA");
  //   }
  // };

  // // Attach event listener when component mounts
  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyDown);

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <>
      <h1>Calculator</h1>
      <br />
      <br />
      <br />
      <div className="centre">
        <div className="struct">
          <Input text={text} />
          <Buttons values={butVal} onButtonClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
