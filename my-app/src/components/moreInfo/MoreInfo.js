import React, {useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Context} from '../Context'
import {countries} from 'country-data'


function MoreInfo(props) {

    const [load, setLoad] = useState(false)
    const {country, darkMode, setBorderCountry} = useContext(Context)
    // console.log(country)
    let history = useHistory()

    function goBack(){
        history.goBack()
    }

    useEffect( () => {
        window.scrollTo(0 , 0)
        if (country === '') {
            setLoad(false)
        } else {
            setLoad(true)
        }
    }, [])
    
    return (
        <>
        <Header/>
        <div className={`more-info ${darkMode ? 'darkmode' : ''}`}>
            <button className='go-back-btn' onClick={goBack}> 
                <FontAwesomeIcon className='left-arrow' icon={ faArrowLeft }/>
                Back
            </button>

            {load ?
                <div className='more-info-card'>
                    <div className='left-card'>
                        <img className='country-flag' src={country.flag}></img>
                    </div>
                    <div className='right-card'>
                        <h1>{country.name}</h1>
                        <div className='main-info'>
                            <p>
                                <span>Native Name: </span>
                                {country.nativeName}
                            </p>
                            <p>
                                <span>Population: </span>
                                {country.population.toLocaleString('en')}
                            </p>
                            <p>
                                <span>Region: </span>
                                {country.region}
                            </p>
                            <p>
                                <span>Sub Region: </span>
                                {country.subregion}
                            </p>
                            <p>
                                <span>Capital: </span>
                                {country.capital}
                            </p>
                        </div>
                        <div className='sub-info'>
                            <p>
                                <span>Top Level Domain: </span>
                                {country.topLevelDomain[0]}
                            </p>
                            <p>
                                <span>Currencies: </span>
                                {country.currencies[0].name}
                            </p>
                            <p>
                                <span>Languages: </span>
                                {country.languages[0].name}
                            </p>
                        </div>
                        <div className='border-countries'>
                            <p>Border Countries:</p>
                            <div className='btn-container'>
                                {
                                    country.borders.map( (border, i) => {

                                        let country = countries[`${border}`].name
                                        // console.log(countries)
                                        return (
                                        <button 
                                            key={i} 
                                            className='border-countries-btn'
                                            onClick={ () => {
                                                //set the country clicked to user input
                                                setBorderCountry(country)
                                                //go to context to retrieve the new input
                                                //do a fetch call with the new input
                                                //set the fetch call input as new country 
                                            }}
                                        > 
                                            { country }
                                        </button> 
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                : 
                <div style={{
                    color : 'red',
                    fontWeight: '800',
                    marginTop: '1rem'
                }}>Whoops! There seems to be an error. Please go back</div>
            }

        </div>
        </>
    )
}

export default MoreInfo
