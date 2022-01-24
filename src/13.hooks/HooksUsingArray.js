import React, {useState} from 'react';

function HooksUsingArray() {
    const [items, setItems] = useState([])

    const addNumber =() => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10) +1
        }])
    }
  return <div className="container">
      <button className="btn btn-primary" onClick={addNumber}>Add Number</button>
      <ul>
          {
              items.map(item => {
                return  <li key={item.id}>{item.value}</li>
              })
          }
      </ul>
  </div>;
}

export default HooksUsingArray;
