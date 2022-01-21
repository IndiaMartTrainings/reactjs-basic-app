import React from 'react';

function FunctionClick() {

    function clickHandler(){
        console.log('Button is clicked')
    }

  return (
      <div>
          <button className="btn btn-primary"
                  onClick={clickHandler}
          >Click Me</button>
      </div>
  )
}

export default FunctionClick;
