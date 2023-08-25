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
            <h2>Experience</h2>
            {experience.map(exp => (
                <ul key={exp._id}>
                    <li>{exp.name}</li>
                    <li>{exp.level}</li>
                    <li>{exp.position}</li>
                    <li>{exp.yearsOfEx}</li>
                </ul>
            ))}
        </div>
    );
}

export default Experience;
