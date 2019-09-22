import React from 'react'
import ReactDOM from 'react-dom'
import { withTracker } from 'meteor/react-meteor-data'

import { Movies } from '../../api/movies'

import ListItem from './ListItem'

class Watchlist extends React.Component {
  renderMovies () {
    return this.props.movies.map((movie) => (
      <ListItem key={movie._id} movie={movie} />
    ))
  }

  handleSubmit (event) {
    event.preventDefault()

    const title = ReactDOM.findDOMNode(this.refs.textInput).value.trim()

    Movies.insert({
      title,
      votes: 0,
      createdAt: new Date()
    })

    ReactDOM.findDOMNode(this.refs.textInput).value = ''
  }

  render () {
    return (
      <section className='watchlist'>
        <h2>Movie List</h2>
        {this.renderMovies()}
      </section>
    )
  }
}

export default withTracker(() => {
  return {
    movies: Movies.find({}, { sort: { votes: -1, title: 1 } }).fetch()
  }
})(Watchlist)
