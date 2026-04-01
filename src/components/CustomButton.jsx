// Task 1: Props
// Props are like "arguments" passed into a component.
// The parent decides the label and color; this component just renders them.

function CustomButton({ label, bgColor }) {
  const style = {
    backgroundColor: bgColor,
    color: "#ffffff",
    border: "none",
    padding: "0.6rem 1.4rem",
    borderRadius: "50px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "0.9rem",
    cursor: "pointer",
    boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
    transition: "transform 0.15s",
  };

  return (
    <button style={style} onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
                           onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
      {label}
    </button>
  );
}

export default CustomButton;
