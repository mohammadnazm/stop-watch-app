import "./App.css"
import DisplayComponent from "./components/DisplayComponent"
import BtnComponent from "./components/BtnComponent"

function App() {
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent />
          <BtnComponent />
        </div>
      </div>
    </div>
  )
}

export default App
