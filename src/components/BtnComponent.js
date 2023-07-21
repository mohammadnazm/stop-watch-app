function BtnComponent(props) {
  return (
    <div className="main-section">
      <span>{props.h}</span>&nbsp;&nbsp;
      <span>{props.m}</span>&nbsp;&nbsp;
      <span>{props.s}</span>&nbsp;&nbsp;
      <span>{props.ms}</span>&nbsp;&nbsp;
    </div>
  )
}

export default BtnComponent
