import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import posthog from 'posthog-js'

posthog.init('phc_sdBkyBmTJW4JRASd2MJf38YBJqayu5nLyTeK6ZqVWZ96', {
  api_host: 'https://us.i.posthog.com',
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
