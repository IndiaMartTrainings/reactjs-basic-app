import React, { Component } from 'react';

 class Welcome extends Component {
   constructor(props){
     super(props)
     console.log(props)
   }
  render() {
      const {name, skill, children} = this.props
    return (
        <div>
            <h1> {name} is a  {skill} {children}</h1>
        </div>
    )
  }
}

export default Welcome;
