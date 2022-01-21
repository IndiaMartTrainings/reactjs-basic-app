import React, { Component } from 'react';

 class Message extends Component {
     constructor(){
         super()
         this.state = {
             name: 'Uma',
             message: 'Welcome Uma'

         }
     }

     subscribe(){
         this.setState({
             message: 'Thak you for subscribing'
         })
     }

  render() {
    return <div>
        <h1>{this.state.message}</h1>
        <button className="btn btn-primary"
                onClick={() =>this.subscribe()}
        >Subscribe</button>
        <br /><br />
        <button className="btn btn-primary"
                onClick={() =>this.setState({message: 'Thank you for Joining US'})}
        >Join</button>
    </div>;
  }
}

export default Message;
