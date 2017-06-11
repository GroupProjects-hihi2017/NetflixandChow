import React from 'react'
import {connect} from 'react-redux'

import {addSnack} from '../actions/snack'

class AddSnackForm extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       snack: {}
     }
   }

   handleSubmit(e) {
     e.preventDefault()
     this.props.dispatch(addSnack(this.state.snack))
   }

   handleChange(e) {
     let snack = this.state.snack
     snack[e.target.name] = e.target.value
     this.setState({snack})
   }

   render () { //alan said make your p tags in line
     return (
       <div className='form'>
          <p><input type='text' id='name' name='name' placeholder='Snack name' onChange={(e) => this.handleChange(e)} /></p>
           <p><input type='text' id='image' name='image' placeholder="image_url" onChange={(e) => this.handleChange(e)} /></p>
           <p><input type='text' name='description' placeholder="description" onChange={(e) => this.handleChange(e)} /></p>
           <p><input className="submit" type='submit' id='submit' value='Submit' onClick={(e) => this.handleSubmit(e)} /></p>
       </div>
     )}
 }

const mapStateToProps = (state) => { //alan : indentation wasn't properly
return {snack: state.snack}

}

export default connect(mapStateToProps)(AddSnackForm)
