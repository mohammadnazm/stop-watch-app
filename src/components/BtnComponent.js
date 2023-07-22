import React from "react"

function BtnComponent(props) {
  console.log("props=", props)
  return (
    <div
      className="stopwatch-btn stopwatch-btn-gre"
      onClick={() => props.start}
    >
      Start
    </div>
  )
}

export default BtnComponent
