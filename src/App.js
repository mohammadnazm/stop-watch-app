import "./App.css"
import DisplayComponent from "./components/DisplayComponent"
import BtnComponent from "./components/BtnComponent"
import { useState } from "react"

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
  const start = () => console.log("Hello")

  var updateMs = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent start={start} />
        </div>
      </div>
    </div>
  )
}

export default App
