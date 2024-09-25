import React, { useEffect, useState } from "react"
import Navbar from "./assets/Navbar"
import CatTable from "./assets/CatTable";

export default function App() {
    const [filter, setFilter] = useState("");
    const [allCats, setAllCats] = useState([])
    const [cats, setCats] = useState([])
    const [filterNow, setFilterNow] = useState(0)

    function removeOneCatById(id) {
        const lessCats = allCats.filter(cat => cat.id !== id)
        setAllCats(lessCats)
    }

    useEffect(() => {
        async function getCats() {            
            try {
                const response = await fetch('http://localhost:5500/cats');
                const data = await response.json();
                console.log(data);
                
                setAllCats(data);
            } catch (error) {
                console.log(error);
                setAllCats([])
            }
        }
        getCats();
    }, []);
    useEffect(() => {
        function filterCats() {
            const filteredCats = allCats.filter(cat => cat.name.toLowerCase().startsWith(filter.toLowerCase()))
            setCats(filteredCats)
            console.log(filteredCats);
        }
        filterCats();
    }, [filterNow ,allCats]);

    return (
        <>
            <Navbar setFilter={setFilter} setFilterNow={setFilterNow}></Navbar>
            <CatTable key={cats.length} cats={cats} removeOneCatById={removeOneCatById}></CatTable>
        </>
    )
}


