// Task 4: Conditional Rendering 


// A switch statement picks which message to show based on the color prop.
// The parent controls behavior simply by passing a different prop value.

function TrafficLight({ color }) {
  let message = "";
  let emoji = "";
  let bg = "";

  switch (color) {
    case "red":
      message = "Stop";
      emoji = "🔴";
      bg = "#e53e3e";
      break;
    case "yellow":
      message = "Slow Down";
      emoji = "🟡";
      bg = "#F8C902";
      break;
    case "green":
      message = "Go!";
      emoji = "🟢";
      bg = "#0C831F";
      break;
    default:
      message = "Unknown signal";
      emoji = "⚪";
      bg = "#aaaaaa";
  }

  const style = {
    background: bg,
    color: color === "yellow" ? "#1c1c1c" : "#ffffff",
    padding: "0.7rem 1.5rem",
    borderRadius: "50px",
    fontWeight: 800,
    fontSize: "1rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
  };

  return <div style={style}>{emoji} {message}</div>;
}

export default TrafficLight;
