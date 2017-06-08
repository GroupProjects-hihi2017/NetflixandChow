import React from 'react'
import {connect} from 'react-redux'

import {getMovie} from '../actions/movie'

const renderMovie = (movie, key) => (
  <div>
    <h1 className='movie-title' key={key}>{movie.show_title}</h1>
    <p className='movie-director' key={key}>Director: {movie.director}</p>
    <p className='movie-cast' key={key}>Cast: {movie.show_cast}</p>
    <p className='movie-category' key={key}>Category: {movie.category}</p>
    <p className='movie-summary' key={key}>Movie summary: {movie.summary}</p>
    <p className='movie-rating' key={key}>Movie rating: {movie.rating}</p>
    <img className='movie-poster' src={movie.poster}/>
  </div>
)

const Movie = ({movie, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getMovie())}>Give me a movie!</button>
    {renderMovie(movie)}
  </div>
)

const mapStateToProps = (state) => {
return {movie: state.movie}

}

export default connect(mapStateToProps)(Movie)
