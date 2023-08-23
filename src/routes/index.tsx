// import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import { useAuthState } from 'react-firebase-hooks/auth'

// import { auth } from 'helpers/utils/firebase'

// import { UiLoading } from 'components/UI'

// import App from './app.routes'
// import Auth from './auth.routes'

// const Routes: React.FC = () => {
//   const [user, loading] = useAuthState(auth)

//   return (
//     <BrowserRouter>
//       {
//         loading ? <UiLoading /> : (user ? <App /> : <Auth />)
//       }
//     </BrowserRouter>
//   )
// }

// export default Routes

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthTemplate from 'templates/Auth'

import Dashboard from 'views/Dashboard'
import List from 'views/List'
import NewRegister from 'views/NewRegister'
import SignIn from 'views/SignIn'
import SignUp from 'views/SignUp'

import { PATHS } from 'helpers/configs/paths'

import { PrivateRoute } from './PrivateRoute'

const {
  DASHBOARD,
  LISTING,
  NEW_REGISTER,
  SIGN_IN,
  SIGN_UP,
} = PATHS

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute path={DASHBOARD.url} exact component={Dashboard} />
      <PrivateRoute path={LISTING.url} component={List} />
      <PrivateRoute path={NEW_REGISTER.url} exact component={NewRegister} />

      <AuthTemplate>
        <Route exact path={SIGN_IN.url} component={SignIn} />
        <Route exact path={SIGN_UP.url} component={SignUp} />
      </AuthTemplate>
    </Switch>
  )
}

export default Routes
