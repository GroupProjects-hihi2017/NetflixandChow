import React from 'react' //alan : clean up the indentation and remove unecessary spacing

import Movie from './Movie'
import Snack from './Snack'


import Header from './Header'
import Footer from './Footer'

const App = () => ( // move each of your div className row and twelve columns into the component
  <div className='app-container container '>

    <div className='row'>
      <div className='twelve columns'>
        <Header />
      </div>
    </div>

    <div className="row">
      <div className = "six columns">
        <Movie />
      </div>
      <div className="six columns">
        <Snack />

      </div>
    </div>

      <div className='row'>
        <div className='twelve columns'>
          <Footer />
        </div>
      </div>

  </div>
)

export default App
