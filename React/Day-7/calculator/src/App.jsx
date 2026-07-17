import Calculator from "./components/Calculator";
import BackgroundShapes from "./components/BackgroundShapes";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BackgroundShapes />

      <div className="calculator-container">
        <Calculator />
      </div>
    </div>
  );
}

export default App;