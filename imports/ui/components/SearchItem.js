import React from 'react'

import { Movies } from '../../api/movies'

import Movie from './Movie'

class SearchItem extends React.Component {
  insertThisMovie () {
    Movies.insert({
      title: this.props.movie.Title,
      votes: 0,
      poster: this.props.movie.Poster,
      createdAt: new Date()
    })
  }

  render () {
    console.log(this.props.movie)
    return (
      <Movie key={this.props.movie.imdbDB} title={this.props.movie.Title} poster={this.props.movie.Poster}>
        <button onClick={this.insertThisMovie.bind(this)}>Add</button>
      </Movie>
    )
  }
}

export default SearchItem
