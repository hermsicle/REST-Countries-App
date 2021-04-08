import React, {useState, useEffect, useContext} from 'react'
import {Context} from '../Context'

function Filter() {

    const [region, setRegion] = useState()
    const {setFiltered, darkMode} = useContext(Context)

    function handleChange(e) {
        setRegion(e.target.value)
        setFiltered(e.target.value)
    }


    return (
        <div className={`filter-form ${darkMode ? 'darkmode' : ''}`}>
            <select 
                onChange={handleChange}
                value={region}>
                <option 
                    disabled='' 
                    selected style={{display: 'none'}}
                > Filter by Region 
                </option>
                <option value='africa'>Africa</option>
                <option value='americas'>Americas</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </select>
        </div>
    )
}

export default Filter
