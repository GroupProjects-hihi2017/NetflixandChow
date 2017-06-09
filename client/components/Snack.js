import React from 'react'
import {connect} from 'react-redux'

import {getSnack} from '../actions/snack'

const renderSnack = (snack, key) => (
  <div className = 'snack-box'>
    <img className='snack-image' src={snack.image}/>
    <h1 className='snack-name' key={key}>{snack.name}</h1>
    <p className='snack-description' key={key}>Description: {snack.description}</p>
  </div>
)

const Snack = ({snack, dispatch, isVisible}) => (
  <div>
    <div className = 'button-div'>
      <button className="button" onClick={() => dispatch(getSnack())}>
        CHOW!
      </button>
    </div>
    {isVisible && renderSnack(snack)}
  </div>
)

const mapStateToProps = (state) => {
return {snack: state.snack, isVisible:state.isVisible.snack}

}

export default connect(mapStateToProps)(Snack)
