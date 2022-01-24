import React, { Component } from 'react';

export class FormOne extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            comments: '',
            country: '',
            gender: '',
            isAdmin: false
        }

        this.state.username ='Uma'
    }

    getFormData(event){
        event.preventDefault()
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)
    }

  render() {
    return <div>
        <h1>User Form One</h1>
        <form>
            <div>
                <label>UserName</label>
                <input type="text" 
                       className="form-control w-50"
                       value={this.state.username}
                       onChange={(event) => this.setState({username: event.target.value})}
                />
            </div>
            <br />
            <div>
                <label>Comments</label>
                <textarea className="form-control w-50"
                          value={this.state.comments}
                          onChange={(event) => this.setState({comments: event.target.value})}
                />
            </div>
            <br />
            <div>
                <label>Country</label>
                <select className="form-select w-50"
                        value={this.state.country}
                        onChange={(event) => this.setState({country: event.target.value})}
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
                       onChange={(event) =>this.setState({gender: event.target.value})}
                /> Female &nbsp;&nbsp;
                <input type="radio" 
                       className="form-check-input" 
                       name="gender"
                       value={0}
                       onChange={(event) =>this.setState({gender: event.target.value})}
                /> Male &nbsp;&nbsp;
            </div>
            <br />
            <div>
                <label>IsAdmin</label>&nbsp;&nbsp;
                <input type="checkbox" 
                       className="form-check-input"
                       value={this.state.isAdmin}
                       onChange={() => this.setState({isAdmin: !this.state.isAdmin})}
                />
            </div>
            <div>
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

export default FormOne;
