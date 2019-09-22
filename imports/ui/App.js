import React from 'react'

import Submit from './components/Submit'
import Watchlist from './components/Watchlist'

const App = () => (
  <div className='container'>
    <header>
      <h1>Moviecracy</h1>
      <p>Where users can decide what to watch next</p>
    </header>

    <main>
      <Submit />
      <Watchlist />
    </main>
  </div>
)

export default App
