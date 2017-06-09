import React from 'react'
import {connect} from 'react-redux'

import {getMovie} from '../actions/movie'

const renderMovie = (movie, key) => (
  <div className = 'movie-box'>
    <img className='movie-poster' src={movie.poster}/>
    <h1 className='movie-title' key={key}>{movie.show_title}</h1>
    <p className='movie-details' key={key}>Director: {movie.director}</p>
    <p className='movie-details' key={key}>Cast: {movie.show_cast}</p>
    <p className='movie-details' key={key}>Category: {movie.category}</p>
    <p className='movie-details' key={key}>Movie summary: {movie.summary}</p>
    <p className='movie-details' key={key}>Movie rating: {movie.rating}</p>
  </div>
)

const Movie = ({movie, dispatch, isVisible}) => (
  <div>
    <div className='button-div'>
      <button className = 'button' onClick={() => dispatch(getMovie())}>NETFLIX!
      </button>
    </div>
    {isVisible && renderMovie(movie)}
  </div>
)

const mapStateToProps = (state) => {
return {movie: state.movie, isVisible:state.isVisible.movie}

}

export default connect(mapStateToProps)(Movie)
