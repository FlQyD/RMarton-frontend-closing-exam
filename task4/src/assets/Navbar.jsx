import React, { useEffect } from 'react'

const Navbar = ({ setFilter, setFilterNow }) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Cat Adoption</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <div className="d-flex" role="search">
                            <input onChange={e => { setFilter(e.target.value) }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button onClick={() => {setFilterNow(Math.random())}} className="btn btn-outline-success">Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar