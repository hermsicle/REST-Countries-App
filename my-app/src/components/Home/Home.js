import React, {useContext} from 'react'
import Countries from '../countries/Countries'
import Filter from '../filter/Filter'
import Form from '../form/Form'
import Header from '../header/Header'
import {Context} from '../Context'

function Home() {

    const {darkMode} = useContext(Context)

    return (
        <div className={`home ${darkMode ? 'darkmode' : ''}`}>
            <Header/>
            <div className='form-container'>
                <Form/>
                <Filter/>
            </div>
            <Countries/>
        </div>
    )
}

export default Home
