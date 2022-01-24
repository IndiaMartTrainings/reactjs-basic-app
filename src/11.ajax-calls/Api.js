import React, { Component } from 'react';
import axios from 'axios'

export class Api extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todos : []
      }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => this.setState({todos: data}))

        // axios("https://jsonplaceholder.typicode.com/todos")
        // .then(response => console.log(response.data))

    }
    
  render() {
    return (
      <div>
        <h1>List of Todos</h1>
         {
            this.state.todos.map(todo => {
              return  <ul key={todo.id}>
                        <li>{todo.id}</li>
                        <li>{todo.title}</li>
                        <li>{todo.completed ? "True": "False"}</li>
                      </ul>
            })
         }
      </div>
    )
  }
}

export default Api;
