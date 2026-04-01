// Task 2A: State — The Switch 


import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false); // false = OFF, true = ON

  return (
    <div className="toggle-wrapper">
      <span className={`toggle-label ${isOn ? "on" : "off"}`}>
        {isOn ? "✅ ON" : "❌ OFF"}
      </span>
      <button className="toggle-btn" onClick={() => setIsOn(!isOn)}>
        Flip Switch
      </button>
    </div>
  );
}

export default Toggle;
