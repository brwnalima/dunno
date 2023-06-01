import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Quotes.css'

function KanyeQuotes() {

    const [quote, setQuote] = useState('')

    useEffect(() => {
        fetchQuote()
    }, [])

    const fetchQuote = () => {
        axios.get('https://api.kanye.rest/')
            .then(function (response) {
                const quote = response.data.quote
                setQuote(quote)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const handleNextQuote = () => {
        fetchQuote()
    }

    return (
        <div className='quotes-wrapper'>
            <div className="kanyeshead">
                <img src="https://i0.wp.com/www.celebrity-cutouts.com/wp-content/uploads/2019/11/kanye-west-smile-ceoebrity-mask.png?fit=1200%2C600&ssl=1" />
            </div>
            <h2>Quote of the day:</h2>
            <p>"{quote}"</p>
            <button onClick={handleNextQuote}>Next Quote</button>
        </div>
    )
}

export default KanyeQuotes