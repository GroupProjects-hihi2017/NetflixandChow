import React from 'react'
import {connect} from 'react-redux'

import {getSnack} from '../actions/snack'

const renderSnack = (snack, key) => (
  <div>
    <img className='snack-image' src={snack.image}/>
    <h1 className='snack-name' key={key}>Snack: {snack.name}</h1>
    <p className='snack-description' key={key}>Description: {snack.description}</p>
  </div>
)

const Snack = ({snack, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getSnack())}>CHOW!</button>
    {renderSnack(snack)}
  </div>
)

const mapStateToProps = (state) => {
return {snack: state.snack}

}

export default connect(mapStateToProps)(Snack)
