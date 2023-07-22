import React from "react"

function DisplayComponent(props) {
  const h = () => {
    if (props.time.h === 0) {
      return ""
    } else {
      return (
        <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
      )
    }
  }
  return (
    <div>
      {h()}
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
