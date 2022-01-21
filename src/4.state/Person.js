import React, { Component } from 'react';

 class Person extends Component {
     constructor(){
         super()

         this.state ={
             name: 'Uma',
             city: 'bengaluru',
             isActive: false
         }
     }
  render() {
      const {name, city, isActive} = this.state
    return (
        <div>
            <h1>Name: {name} works From {city} : 
                {isActive ? " True" : " False"}</h1>   
        </div>
    )
  }
}

export default Person;
