import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const fetchKittens = (id) => {
    return fetch(`/kittens/${id}`).then((res) => res.json());
};

const fetcPostKittens = (employeeKitten) => {
    return fetch(`/kittens/${employeeKitten._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeKitten),
      }).then((res) => res.json());
}

function Kittens() {
    const { id } = useParams();
    const [employeeKittens, setEmployeeKittens] = useState({
        _id: '',
        name: '',
        kittens: [],
    });

    const [kittenName, setKittenName] = useState("");
    const [kittenWeight, setKittenWeight] = useState("");
    
    const addKitten = () => {
        const newKitten = {
            _id: id,
            kittens: [
                {
                    name: kittenName,
                    weight: parseFloat(kittenWeight)
                }
            ]
            
        };

        fetcPostKittens(newKitten).then(dat=>{
            setEmployeeKittens(dat)
            setKittenName("");
            setKittenWeight("");
        })
    }

    useEffect(() => {
        fetchKittens(id).then(data => setEmployeeKittens(data));
    }, [id])

    return (
        <div>
            <Link to={`/`}><button>Back</button></Link>
            {employeeKittens.kittens !== 0 ? (<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Kittens</th>
                        <th>Add Kittens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={employeeKittens._id}>
                        <td>{employeeKittens.name}</td>
                        <td>
                            {employeeKittens.kittens.map(dat => (
                                <span key={dat._id}>{dat.name} <br /></span>
                            ))}
                        </td>
                        <td>
                            <input type='text' placeholder='name' onChange={e=>setKittenName(e.target.value)} value={kittenName}/>
                            <br/>
                            <input type='number' placeholder='weight' onChange={k=>setKittenWeight(k.target.value)} value={kittenWeight}/>
                            <br/>
                            <button type='submit' onClick={addKitten}>Add kitten</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ad Kittens</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={employeeKittens._id}>
                            <td>{employeeKittens.name}</td>
                            <td>
                                <input type='text' placeholder='name' onChange={e=>setKittenName(e.target.value)} value={kittenName}/>
                                <br/>
                                <input type='number' placeholder='weight' onChange={k=>setKittenWeight(k.target.value)} value={kittenWeight}/>
                                <br/>
                                <button type='submit' onClick={addKitten}>Add kitten</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Kittens