import React, {useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Context} from '../Context'

function Form() {
    const [input, setInput] = useState('')
    const {setUserInput, error, darkMode} = useContext(Context)

    function handleSubmit(e) {
        e.preventDefault()
        setUserInput(input)
        setInput('')
    }


    return (
        <form className={`search-form ${darkMode ? 'darkmode' : ''}`} onSubmit={handleSubmit}>
            <button><FontAwesomeIcon className='search' icon={faSearch}/></button>
            <input 
                type='text' 
                required
                placeholder='Search for a country...'
                value={input}
                onChange = {(e) => {
                    setInput(e.target.value)
                }}
            />
            {error && <p className='error-message'>Please put a valid country</p>}
        </form>
    )
}

export default Form
