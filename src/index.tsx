import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from 'hooks/theme'
import { MenuMobileProvider } from 'hooks/menu'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <MenuMobileProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MenuMobileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
