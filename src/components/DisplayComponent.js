import React from "react"

function DisplayComponent(props) {
  return (
    <div>
      <h1>D</h1>
      <span>{props.time.h >= 0 ? props.time.h : "0" + props.time.h}</span>
      &nbsp;&nbsp;
      <span>{props.time.m}</span>&nbsp;&nbsp;
      <span>{props.time.s}</span>&nbsp;&nbsp;
      <span>{props.time.ms}</span>&nbsp;&nbsp;
    </div>
  )
}

export default DisplayComponent
