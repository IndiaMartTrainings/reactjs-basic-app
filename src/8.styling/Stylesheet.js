import React from 'react';


function Stylesheet(props) {
  console.log(props)
  let className=props.primary? "primary" : "secondary"
  return <div>
      <h1 className={className}>Applied CSS using stylesheet</h1>
  </div>;
}

export default Stylesheet;
