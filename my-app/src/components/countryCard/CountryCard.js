import React, {useContext} from 'react'
import {Context} from '../Context'

function CountryCard(props) {

    const {darkMode} = useContext(Context)

    return (
        <div className={`country-card ${darkMode ? 'darkmode' : ''}`} onClick={props.onClick}>
            <img src={props.img}></img>
            <h1>{props.country}</h1>
            <p>
                <span>Population: </span>
                {props.population}
            </p>
            <p>
                <span>Region: </span>
                {props.region}
            </p>
            <p>
                <span>Capital: </span>
                {props.capital}
            </p>
        </div>
    )
}

export default CountryCard
