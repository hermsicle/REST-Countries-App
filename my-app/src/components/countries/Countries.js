import React, {useContext} from 'react'
import {Context} from '../Context'
import CountryCard from '../countryCard/CountryCard'
import {Link} from 'react-router-dom'

function Countries() {

    const {allCountries, setCountry} = useContext(Context)

    const getAllCountries = allCountries.map((country, i) => (
        <>
        <Link to='/country'>
        <CountryCard onClick={ () => {
            if(country.name === 'Albania') {
                alert("Error")
            } else {
                setCountry(country)
            }
        }} 
            key={i} 
            img={country.flag} 
            country={country.name} 
            population={country.population.toLocaleString('en')} 
            region={country.region} 
            capital={country.capital} 
        />  
        </Link>
        </>
    ))

    return (
        <div className='all-countries-container'>
            {getAllCountries}
        </div>
    )
}

export default Countries
