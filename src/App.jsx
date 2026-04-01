import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import Toggle from "./components/Toggle";
import Mirror from "./components/Mirror";
import HoverBox from "./components/HoverBox";
import TrafficLight from "./components/TrafficLight";
import TodoList from "./components/TodoList";
 
function Section({ number, title, children }) {
  return (
    <section className="section-card">
      <div className="section-header">
        <span className="section-number">{number}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
 
function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
 
        {/* Row 1: Task 1 */}
        <div className="grid-full">
          <Section number="01" title="Props — Passing Data Around">
            <p className="concept">Parent passes <code>label</code> and <code>bgColor</code> as props. The component uses them via inline CSS.</p>
            <div className="button-row">
              <CustomButton label="Add to Cart 🛒" bgColor="#0C831F" />
              <CustomButton label="Buy Now ⚡"    bgColor="#F8C902" />
              <CustomButton label="Remove ✕"      bgColor="#e53e3e" />
            </div>
          </Section>
        </div>
 
        {/* Row 2: Task 2A + 2B side by side */}
        <div className="grid-2col">
          <Section number="02A" title="State — The Switch">
            <p className="concept"><code>useState(false)</code> stores ON/OFF. Clicking flips it with <code>setIsOn(!isOn)</code>.</p>
            <Toggle />
          </Section>
 
          <Section number="02B" title="State — The Mirror">
            <p className="concept">Every keystroke calls <code>setText(e.target.value)</code>. The paragraph below re-renders instantly.</p>
            <Mirror />
          </Section>
        </div>
 
        {/* Row 3: Task 3 + Task 4 side by side */}
        <div className="grid-2col">
          <Section number="03" title="Events — Hover the Box">
            <p className="concept"><code>onMouseEnter</code> → red. <code>onMouseLeave</code> → blue. Both use camelCase.</p>
            <HoverBox />
          </Section>
 
          <Section number="04" title="Conditional Rendering — Traffic Light">
            <p className="concept">A <code>switch</code> picks the message based on the <code>color</code> prop.</p>
            <div className="traffic-row">
              <TrafficLight color="red"    />
              <TrafficLight color="yellow" />
              <TrafficLight color="green"  />
            </div>
          </Section>
        </div>
 
        {/* Row 4: Task 5 full width */}
        <div className="grid-full">
          <Section number="05" title="Lists & Keys — Todo List">
            <p className="concept">Toggle between <code>id</code> and <code>index</code> as key, then add items to the top to see why index keys break.</p>
            <TodoList />
          </Section>
        </div>
 
      </main>
    </div>
  );
}
 
export default App;