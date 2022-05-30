import React from 'react'

const QuoteBox = ({quotesRandom, colorRandom}) => {

  return (
    <article className='Card' style={{color: colorRandom}}>
        <p className='text'>"{quotesRandom.quote}"</p>
        <h4 className='author'>-{quotesRandom.author}</h4>
    </article>
  )
}

export default QuoteBox