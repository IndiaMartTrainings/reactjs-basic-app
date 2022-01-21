import React, { Component } from 'react';

export class ClassClick extends Component {

    clickHandler(){
        console.log('Did you click me ?')
    }
  render() {
    return (
        <div>
            <button className="btn btn-primary"
                    onClick={this.clickHandler}
            >Click Me</button>
        </div>
    )
  }
}

export default ClassClick;
