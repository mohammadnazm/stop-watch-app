import React from "react"

function BtnComponent(props) {
  console.log("props=", props)
  return (
    <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>
      Start
    </button>
  )
}

export default BtnComponent
