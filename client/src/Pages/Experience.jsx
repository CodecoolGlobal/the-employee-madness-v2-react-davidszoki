import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const fetchExperience = (id) => {
    return fetch(`/years-of-experience/${id}`).then(res => res.json());
}

function Experience() {
    const { id } = useParams(); //Ezt használni minden Id-s fetchnél
    const [experience, setExperience] = useState([]);

    //ha useEffectbe teszem végtelen ciklusra futok
    // az a rész ami itt van bajusz zárójelében (http://localhost:3000/years-of-experience/{2}) visszadja az összes paramsot key-valeu párok formályában
    fetchExperience(id).then(data => setExperience(data));

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Position</th>
                        <th>Years of Experience</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {experience.map((exp) => (
                        <tr key={exp._id}>
                            <td>{exp.name}</td>
                            <td>{exp.level}</td>
                            <td>{exp.position}</td>
                            <td>{exp.yearsOfEx}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Experience;
