import React, { Component } from 'react';
import Child from './Child';

export class Parent extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Parent Component'
        }
       // this.callParent = this.callParent.bind(this)
    }

    callParent =(child) =>{
        console.log(this)
        alert(`Calling ${this.state.name} from ${child} `)
    }
  render() {
    return <div>
        <br />
        <Child name="uma" callParent={this.callParent}/>
    </div>;
  }
}

export default Parent;
