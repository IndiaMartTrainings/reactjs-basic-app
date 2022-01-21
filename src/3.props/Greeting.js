import React from 'react';

function Greeting(props) {
    console.log(props)
    const {name, skill, techSkill, children} = props
  return <div>
      <h1> {name} is a  {techSkill} {skill} {children}</h1>

  </div>;
}

export default Greeting;

