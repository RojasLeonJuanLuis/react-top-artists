import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Artists from './pages/Artists'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Artists />,
  document.getElementById('root')
)
registerServiceWorker()
