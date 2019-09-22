import React from 'react'
import ReactDOM from 'react-dom'

import { Movies } from '../../api/movies'

import Movie from './Movie'
// import SearchItem from './SearchItem'

class Submit extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      results: []
    }
  }

  handleSubmit (event) {
    event.preventDefault()

    const apiKey = '68c9197f'
    const search = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    const api = `https://www.omdbapi.com/?type=movie&apikey=${apiKey}&s=${search}`

    this.setState({
      isLoading: true
    })

    window.fetch(api)
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: data.Search,
          isLoading: false
        })
      })
  }

  insertThisMovie (event) {
    const movieID = event.currentTarget.value

    const movieInfo = this.state.results.find(movie => movie.imdbID === movieID)

    Movies.insert({
      title: movieInfo.Title,
      votes: 0,
      poster: movieInfo.Poster,
      createdAt: new Date()
    })

    ReactDOM.findDOMNode(this.refs.textInput).value = ''
    this.setState({
      results: []
    })
  }

  render () {
    let message = (<p>Please search for a movie</p>)

    if (this.state.isLoading) {
      message = (<p>loading...</p>)
    }

    if (this.state.results.length > 0) {
      message = this.state.results.map((movie) => (
        <Movie key={movie.imdbID} title={movie.Title} poster={movie.Poster}>
          <button value={movie.imdbID} onClick={this.insertThisMovie.bind(this)}>Add</button>
        </Movie>
      ))
    }

    return (
      <section>
        <h2>My movie</h2>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            ref='textInput'
            placeholder='Type movie title to search'
          />
        </form>

        <div className='results'>
          {message}
        </div>
      </section>
    )
  }
}

export default Submit
