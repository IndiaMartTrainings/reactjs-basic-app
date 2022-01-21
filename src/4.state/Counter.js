import React, { Component } from 'react';

export class Counter extends Component {
    constructor(){
      super()  

      this.state = {
        count:0
      }
    }

    increment(){
        // this.state.count = this.state.count + 1
        // this.state.name ="mahesh"
        // console.log(this.state.count)

        this.setState({
            count: this.state.count +1
        })
        
    }

  render() {
    return <div>
            <h1>Counter : {this.state.count} </h1>
            <h1>Name: {this.state.name}</h1>
            <button className="btn btn-primary"
                    onClick={() => this.increment()}
            >Increment</button>
    </div>;
  }
}

export default Counter;

