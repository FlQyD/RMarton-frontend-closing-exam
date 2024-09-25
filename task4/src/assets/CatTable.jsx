import React, { useState } from 'react'
import CatTableRow from './CatTableRow'

const CatTable = ({cats, removeOneCatById}) => {
    return (
        <table className="table" key={cats.length}>
            <thead>
                <tr> {/**STATIC */}
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Color</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody key={cats.length}>
                {
                    cats.map((cat, index)=> {
                        return <CatTableRow key={cat.name+cat.id} id={cat.id} name={cat.name} age={cat.age} gender={cat.gender} color={cat.color} removeOneCatById={removeOneCatById}/>
                    })
                }
            </tbody>
        </table>
    )
}

export default CatTable