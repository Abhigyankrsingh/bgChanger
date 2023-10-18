import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    margin: "0.5rem",
    borderRadius: "999px",
    cursor: "pointer",
    border: "none", // Remove the border to have a cleaner look
    color: "white",
    fontWeight: "bold",
  };

  const colorButtons = [
    { colorName: "Red", colorCode: "red" },
    { colorName: "Green", colorCode: "green" },
    { colorName: "Blue", colorCode: "blue" },
    { colorName: "Yellow", colorCode: "yellow" },
    { colorName: "Purple", colorCode: "purple" },
    { colorName: "Orange", colorCode: "orange" },
  ];

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "20px",
      }}
    >
      <div style={buttonContainerStyle}>
        {colorButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => setColor(button.colorCode)}
            style={{
              ...buttonStyle,
              backgroundColor: button.colorCode,
            }}
          >
            {button.colorName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
