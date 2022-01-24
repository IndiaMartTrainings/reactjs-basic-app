import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log('This is constructor of A')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps of A')
        return null
    }

    componentDidMount(){
        console.log('ComponentdidMount of A')
    }

    
  render() {
      console.log('This is render method of A')
    return <div>
        <LifeCycleB />
    </div>;
  }
}

export default LifeCycleA;
