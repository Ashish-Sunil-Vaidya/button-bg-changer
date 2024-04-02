import { useState } from "react";

function App() {
  const [currentBg, setCurrentBg] = useState(0);

  const bgColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
    "white",
    "black",
    "gray",
    "brown",
    "cyan",
    "teal",
    "lime",
    "lightgreen",
  ];

  return (
    <div
      className="app"
      style={{
        backgroundColor: bgColors[currentBg],
      }}
    >
      <h1
        style={{
          color:
            bgColors[currentBg] === "white" || bgColors[currentBg] === "yellow"
              ? "black"
              : "white",
        }}
      >
        Background Changer
      </h1>
      <div className="buttons-grid">
        {bgColors.map((color, index) => (
          <button
            key={index}
            style={{
              backgroundColor: color,
              color:
                color === "white" || color === "yellow" ? "black" : "white",
            }}
            onClick={() => setCurrentBg(index)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
