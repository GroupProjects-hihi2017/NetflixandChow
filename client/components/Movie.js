import React from 'react'
import {connect} from 'react-redux'

import {getMovie} from '../actions/movie'

const renderMovie = (movie, key) => (
  <h1 key={key}>{movie.show_title}</h1>
)

const Movie = ({movie, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getMovie())}>Give me a movie!</button>
    {renderMovie(movie)}
  </div>
)

const mapStateToProps = (state) => {
  console.log(state)
return {movie: state.movie}

}

export default connect(mapStateToProps)(Movie)
