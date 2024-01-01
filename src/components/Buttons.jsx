import React from "react";

const Buttons = ({ values, onButtonClick }) => {
    
  return (
    <div className="row">
      {values.map((val) => (
        <button
          className={`butt ${
            isNaN(val) ? (val === "=" ? "equal" : "first") : ""
          }`}
          key={val}
          onClick={() => onButtonClick(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
