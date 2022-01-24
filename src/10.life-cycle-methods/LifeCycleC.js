import React, { Component } from 'react';

export class LifeCycleC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log('This is constructor of C')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps of C')
        return null
    }

    componentDidMount(){
        console.log('ComponentdidMount of C')
    }

    
  render() {
      console.log('This is render method of C')
    return <div></div>;
  }
}

export default LifeCycleC;
