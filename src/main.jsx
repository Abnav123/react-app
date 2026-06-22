import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Component from './component1.jsx'

const comp = new React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'click me'
)

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Component />
    {comp}
  </>
)
