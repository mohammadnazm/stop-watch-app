import React from "react"

function DisplayComponent(props) {
  return (
    <div>
      <h1>D</h1>
      <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
      &nbsp;&nbsp;
      <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
      &nbsp;&nbsp;
      <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
      &nbsp;&nbsp;
      <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
      &nbsp;&nbsp;
    </div>
  )
}

export default DisplayComponent
