import React from 'react'

const Movie = (props) => (
  <div className='movie'>
    <h3>
      {props.title}
    </h3>
    <img src={props.poster} alt={`${props.title} Poster`} />
    {props.children}
  </div>
)

export default Movie
