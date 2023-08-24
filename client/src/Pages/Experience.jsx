import React, { useEffect, useState } from 'react';

const fetchExperience = (id) => {
    return fetch(`/years-of-experience/${id}`).then(res => res.json());
}

function Experience() {
    const [experience, setExperience] = useState([]);
    
    useEffect(() => {
        const id = { _id: 'your_id_here' }; // Replace 'your_id_here' with the actual ID
        fetchExperience(id._id).then(data => setExperience(data));
    }, []);


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
