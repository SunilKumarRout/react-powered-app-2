// Task 2B: State — The Mirror

import { useState } from "react";

function Mirror() {
  const [text, setText] = useState("");

  return (
    <div className="mirror-wrapper">
      <input
        className="mirror-input"
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mirror-output">
        {text ? `🪞 ${text}` : <span className="placeholder-hint">Your text will appear here...</span>}
      </p>
    </div>
  );
}

export default Mirror;
