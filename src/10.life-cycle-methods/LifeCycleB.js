import React, { Component } from 'react';
import LifeCycleC from './LifeCycleC';

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log('This is constructor of B')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps of B')
        return null
    }

    componentDidMount(){
        console.log('ComponentdidMount of B')
    }

    
  render() {
      console.log('This is render method of B')
    return <div>
        <LifeCycleC />
    </div>;
  }
}

export default LifeCycleB;
