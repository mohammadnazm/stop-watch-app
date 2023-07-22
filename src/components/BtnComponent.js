import React from "react"

function BtnComponent(props) {
  console.log("props=", props)
  return (
    <div>
      {props.status === 0 ? (
        <button
          className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start}
        >
          Start
        </button>
      ) : (
        ""
      )}
      {props.status === 1 ? (
        <div>
          <button class="stopwatch-btn stopwatch-btn-red" onClick={props.start}>
            Stop
          </button>
          <button class="stopwatch-btn stopwatch-btn-yel" onClick={props.start}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default BtnComponent
