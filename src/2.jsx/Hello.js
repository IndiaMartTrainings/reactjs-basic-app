import react from 'react'
import React from 'react'

const Hello = () =>{
    // return (
    //     <div id="divId">
    //         <h1>This is using JSX</h1>
    //     </div>

    // )

    return React.createElement('div', {id: 'divId', className:'divHeader'}, 
           React.createElement('h1', null, 'Without using JSX')
    )
    

}

export default Hello