// Task 3: Events 
// onMouseEnter fires when the cursor enters the element.
// onMouseLeave fires when it leaves. Both use camelCase.

import { useState } from "react";

function HoverBox() {
  const [hovered, setHovered] = useState(false);

  const boxStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "16px",
    background: hovered ? "#e53e3e" : "#276EF1",
    transition: "background 0.25s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: "0.85rem",
    cursor: "default",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? "🔴 Red!" : "🔵 Hover me"}
    </div>
  );
}

export default HoverBox;
