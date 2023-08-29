import React, { useEffect, useState } from 'react'

const fetchPosition = () => {
    return fetch("/api/position").then(res => res.json())
}

function Positions() {
    const [positions, setPositions] = useState([])

    useEffect(() => {
        fetchPosition().then(data => setPositions(data))
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map((posi) => (
                        <tr key={posi._id}>
                            <td>{posi.name}</td>
                            <td>{posi.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Positions