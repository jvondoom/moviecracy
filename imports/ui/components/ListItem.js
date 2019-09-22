
import React, { Component } from 'react'

import { Movies } from '../../api/movies'

import Movie from './Movie'

export default class ListItem extends Component {
  upvoteMovie () {
    Movies.update(this.props.movie._id, {
      $set: { votes: this.props.movie.votes + 1 }
    })
  }

  downvoteMovie () {
    Movies.update(this.props.movie._id, {
      $set: { votes: this.props.movie.votes - 1 }
    })
  }

  deleteThisMovie () {
    Movies.remove(this.props.movie._id)
  }

  render () {
    return (
      <Movie key={this.props.movie._id} title={`${this.props.movie.votes} - ${this.props.movie.title}`} poster={this.props.movie.poster}>
        <button onClick={this.upvoteMovie.bind(this)}>Up vote</button>
        <button onClick={this.downvoteMovie.bind(this)}>Down vote</button>
        <button onClick={this.deleteThisMovie.bind(this)}>&times;</button>
      </Movie>
    )
  }
}
