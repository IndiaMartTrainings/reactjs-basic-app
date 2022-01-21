import React, { Component } from 'react';

export class Form extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            comments: '',
            country: '',
            gender: '',
            isAdmin: false
        }
    }

    getFormData(event){
        event.preventDefault()
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)
    }

    getUserName(event){
        this.setState({
            username: event.target.value
        })
    }
    getComments(event){
        this.setState({
            comments: event.target.value
        })
    }
    getCountry(event){
        this.setState({
            country: event.target.value
        })       
    }
    getGender(event){
        this.setState({
            gender: event.target.value
        })       
    }
    checkIfAdmin(){
        this.setState({
            isAdmin: !this.state.isAdmin
        })       
    }
  render() {
    return <div>
        <h1>User Form</h1>
        <form>
            <div>
                <label>UserName</label>
                <input type="text" 
                       className="form-control w-50"
                       value={this.state.username}
                       onChange={(event) => this.getUserName(event)}
                />
            </div>
            <br />
            <div>
                <label>Comments</label>
                <textarea className="form-control w-50"
                          value={this.state.comments}
                          onChange={(event) => this.getComments(event) }
                />
            </div>
            <br />
            <div>
                <label>Country</label>
                <select className="form-select w-50"
                        value={this.state.country}
                        onChange={(event) => this.getCountry(event)}
                >
                    <option value="">Select</option>
                    <option value="1">Bharat</option>
                    <option value="2">Japan</option>
                    <option value="3">Australia</option>
                </select>
            </div>
            <br />
            <div>
                <label>Gender </label>&nbsp;&nbsp;
                <input type="radio" 
                       className="form-check-input" 
                       name="gender"
                       value={1}
                       onChange={(event) =>this.getGender(event)}
                /> Female &nbsp;&nbsp;
                <input type="radio" 
                       className="form-check-input" 
                       name="gender"
                       value={0}
                       onChange={(event) =>this.getGender(event)}
                /> Male &nbsp;&nbsp;
            </div>
            <br />
            <div>
                <label>IsAdmin</label>&nbsp;&nbsp;
                <input type="checkbox" 
                       className="form-check-input"
                       value={this.state.isAdmin}
                       onChange={() => this.checkIfAdmin()}
                />
            </div>
            <br />
            <div>
                <button className="btn btn-primary"
                        onClick={(event) =>this.getFormData(event)}
                >Get Form Data</button>
            </div>
        </form>
    </div>;
  }
}

export default Form;
