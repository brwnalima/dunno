import React from 'react'
import KanyeQuotes from './KanyeQuotes'
import './Quotes.css'

function FrontPage() {
  return (
    <div className='container'>
        <aside>
            <h1>Get to know</h1>
            <h1>a famous quote</h1>
            <h1>from Ye</h1>
        </aside>

        <main>
            <KanyeQuotes/>
        </main>
    </div>
  )
}

export default FrontPage