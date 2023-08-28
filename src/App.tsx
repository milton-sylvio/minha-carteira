import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import GlobalStyles from 'styles/GlobalStyles'
import { useTheme } from 'hooks/theme'

import Routes from 'routes'

const App = () => {
  const { theme } = useTheme()
  const history = createBrowserHistory()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  )
}

export default App
