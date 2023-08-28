import { useEffect, useState } from 'react'

function SameWorkers({ sameEmploye, onBack }) {
    const [sameWorkers, setsameWorkers] = useState([]);
    // figyelni hogy milyen nevet adok át neki itt és azt a backenden is úgy kell hivatkozni
    const level = sameEmploye.level
    const posi = sameEmploye.position
    const queryParams = new URLSearchParams({level, posi}).toString()

    const url = `/same?${queryParams}`
    
    useEffect(()=>{
        fetch(url).then(res => res.json())
        .then(data => {setsameWorkers(data)})
    }, [url])
    // console.log(sameWorkers);

    return (
        <div>
            <button onClick={onBack}>Back</button>
            <table>
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
            </table>
        </div>
    )
}

export default SameWorkers