import React from 'react';
import Person from '../4.state/Person';

function NameListThree() {
    const persons = [
        {
            id: 1,
            name: "Scott",
            age: 45,
            skill: "React"
        },
        {
            id: 2,
            name: "Adam",
            age: 44,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Tuan",
            age: 43,
            skill: "C#"
        },
        {
            id: 4,
            name: "Uma",
            age: 39,
            skill: "JavaScript"
        }
    ]
    const personList = persons.map(person => {
                              return <h2 key={person.id}>
                                        Name: {person.name} <br/>
                                        Age: {person.age} <br/>
                                        Skill: {person.skill} <br/>
                                      </h2> 
                                    })
  return <div>{personList}</div>;
}

export default NameListThree;
