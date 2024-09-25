import React from 'react'

const CatTableRow = ({ id, name, age, gender, color, removeOneCatById}) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{color}</td>
            <td><button onClick={() => {removeOneCatById(id)}} type="button" className="btn btn-danger">Delete</button></td>
        </tr>
    )
}
export default CatTableRow