import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [allCountries, setAllCountries] = useState([])
    let [filtered, setFiltered] = useState()
    const [userInput, setUserInput] = useState('')
    const [borderCountry, setBorderCountry] = useState('')
    const [error, setError] = useState(false)
    const [country, setCountry] = useState('')
    const [darkMode, setDarkMode] = useState(false)

    useEffect( () => {
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
            .then(res => res.json())
            .then(data => setAllCountries(data))
    }, [])

    useEffect( () => {
        let trimmedUrl = userInput.trim().toLowerCase()
        const url = `https://restcountries.eu/rest/v2/name/${trimmedUrl}`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data.status == 404) {
                    setError(true)
                    // console.log('its a error')
                } else {
                    setAllCountries(data)
                    setError(false)
                }
            })
            .catch(err => console.log(err))
    }, [userInput])

    useEffect( () => {
        let trimmedUrl = borderCountry.trim().toLowerCase()
        const url = `https://restcountries.eu/rest/v2/name/${trimmedUrl}?fullText=true`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data.status == 404) {
                    setError(true)
                    // console.log('its a error')
                } else {
                    // console.log(data[0])
                    setCountry(data[0])
                    setError(false)
                }
            })
            .catch(err => console.log(err))
    }, [borderCountry])

    useEffect( () => {
        if(filtered == undefined) {
            filtered = ''
        } else {
            let url = `https://restcountries.eu/rest/v2/region/${filtered}`
            fetch(url)
                .then(res => res.json())
                .then(data => setAllCountries(data))
                .catch(err => console.log(err))
        }
    }, [filtered])

    return (
        <Context.Provider 
            value={{ 
                allCountries, 
                setFiltered, 
                setUserInput, 
                error,
                country,
                setCountry,
                darkMode,
                setDarkMode,
                setBorderCountry
            }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}