import React from 'react';

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return <div>
      <h1 style={heading}>Inline Styling</h1> <br />
      <h2 style={{color:'green'}}>This is H2</h2>
  </div>;
}

export default Inline;
