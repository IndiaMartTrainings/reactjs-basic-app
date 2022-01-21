import React from 'react';
import Person from '../4.state/Person';

function NameListFive() {
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

  return <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Skill</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map(person =>(
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.skill}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
  </div>;
}

export default NameListFive;
