import React from 'react';

function NameListTwo() {
    const names = ["Scott", "Adam", "Tuan", "Uma"]
    const nameList = names.map((name, index) =><h2 key={index}>{name}</h2>)
    return <React.Fragment>{nameList}</React.Fragment> 
}

export default NameListTwo;
