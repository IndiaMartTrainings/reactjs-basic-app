import React, { Component } from 'react';

 class EventBind extends Component {
     constructor(){
         super()

         this.state = {
             message: "Hello"
         }
         // 3rd Approach
        // this.callMe = this.callMe.bind(this)
     }

    //  callMe (){
    //     console.log(this)
    //    this.setState({
    //        message: 'Thank you'
    //    })
    // }
    // 4th Approach
     callMe =()=>{
         console.log(this)
        this.setState({
            message: 'Thank you'
        })
     }
  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            {/* <button className="btn btn-primary" onClick={this.callMe}>Send</button> */}
            {/* 1st Approach*/}
            {/* <button className="btn btn-primary" onClick={this.callMe.bind(this)}>Send</button> */}
            {/* 2nd Approach*/}
            {/* <button className="btn btn-primary" 
                    onClick={() =>this.callMe('Scott')}>Send</button>            */}
            {/* 3rd Approach*/}
            {/* <button className="btn btn-primary" 
                    onClick={this.callMe}>Send</button>   */}
            {/* 4th Approach*/}
            <button className="btn btn-primary" 
                    onClick={this.callMe}>Send</button>  
        </div>
    )
  }
}

export default EventBind;
