import { useEffect, useState } from 'react'

const fetchSameEmployee = () => {
    return fetch(`/same`).then(res => res.json())
}

function SameWorkers({ sameEmploye, onBack }) {
    const [sameWorkers, setsameWorkers] = useState([]);
    
    useEffect(()=>{
        fetchSameEmployee().then(setsameWorkers(sameEmploye))
    }, [sameEmploye])
    
    console.log(sameWorkers);
    return (
        <div>
            <h1>Test</h1>
            <button onClick={onBack}>Back</button>
            {/* <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Position</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {sameWorkers.map((same) => (
                        <tr key={same._id}>
                            <td>{same.name}</td>
                            <td>{same.level}</td>
                            <td>{same.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    )
}

export default SameWorkers