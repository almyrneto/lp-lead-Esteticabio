import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { GlobalStyle } from './assets/style/globalstyle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
)
