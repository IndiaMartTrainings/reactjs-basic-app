import React, { Component } from 'react';

export class Student extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         students: [],
         name: '',
         email: '',
         city: '',
         id: ''
      }
    }

    componentDidMount(){
      this.getStudents()
    }

    getStudents(){
      fetch("http://localhost:3001/api/students")
      .then(response => response.json())
      .then(data => this.setState({students: data}))
    }

    addStudent(){
      const postDataConfig = {
          headers: {'Content-Type': 'application/json'},
          method: "POST",
          body: JSON.stringify({
              name: this.state.name,
              email: this.state.email,
              city: this.state.city
          })
      }

      fetch("http://localhost:3001/api/students", postDataConfig )
      .then(response => response.json())
      .then(data => {
        this.clearFields()
        this.getStudents() 
      })
    }

    clearFields(){
      this.setState({
        name: '',
        email: '',
        city: ''
      })
    }

    editStudent(studentId){
      fetch(`http://localhost:3001/api/students/${studentId}`)
      .then(response => response.json())
      .then(data => 
           this.setState({
             id: data._id,
             name: data.name,
             email: data.email,
             city: data.city
           })
      )
    }

    updateStudent(){
      const putDataConfig = {
        headers: {'Content-Type': 'application/json'},
        method: "PUT",
        body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            city: this.state.city
        })
    }


    fetch(`http://localhost:3001/api/students/${this.state.id}`, putDataConfig )
    .then(response => response.json())
    .then(data => {
      this.clearFields()
      this.getStudents() 
    })
    }

    
    deleteStudent(studentId){
      const deleteDataConfig = {
        headers: {'Content-Type': 'application/json'},
        method: "DELETE",
    }

    fetch(`http://localhost:3001/api/students/${studentId}`, deleteDataConfig )
    .then(response => response.json())
    .then(data => {
      this.clearFields()
      this.getStudents() 
    })
    }
    
  render() {
    return (
      <div className="container">
        <h1>Student List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
            <tr>
              <th>
                <input type="text" 
                       value={this.state.name} 
                       onChange={(event) =>this.setState({name: event.target.value})}
                />
              </th>
              <th>
                <input type="text" 
                       value={this.state.email} 
                       onChange={(event) =>this.setState({email: event.target.value})}
                />
              </th>
              <th>
                <input type="text" 
                       value={this.state.city} 
                       onChange={(event) =>this.setState({city: event.target.value})}
                />
              </th>
              <th>
                <button className="btn btn-primary"
                        onClick={() => this.addStudent()}
                >Add</button> &nbsp;&nbsp;&nbsp;
                <button className="btn btn-warning"
                         onClick={() => this.updateStudent()}
                >Update</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.students.map(student => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.city}</td>
                  <td>
                    <button className="btn btn-warning"
                            onClick={() => this.editStudent(student._id)}
                    >Edit</button>&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-danger"
                            onClick={() => this.deleteStudent(student._id)}
                    >Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Student;
