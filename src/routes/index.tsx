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
import { Route, Switch, Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import InternalPagesTemplate from 'templates/InternalPages'
import AuthTemplate from 'templates/Auth'

import Dashboard from 'views/Dashboard'
import List from 'views/List'
import NewRegister from 'views/NewRegister'
import SignIn from 'views/Signin'
import SignUp from 'views/Signup'

import { auth } from 'helpers/utils/firebase'
import { paths } from 'helpers/configs/paths'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user] = useAuthState(auth)

  return (
    <Route
      {...rest}
      render={props => {
        if (!user) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect to={{ pathname: paths.SIGN_IN.url, state: { from: props.location } }} />
          )
        }

        // logged in so return component
        return (
          <InternalPagesTemplate>
            <Component {...props} />
          </InternalPagesTemplate>
        )
      }}
    />
  )
}

const Routes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute path={paths.DASHBOARD.url} exact component={Dashboard} />
      <PrivateRoute path={paths.LISTING.url} component={List} />
      <PrivateRoute path={paths.NEW_REGISTER.url} exact component={NewRegister} />

      <AuthTemplate>
        <Route exact path={paths.SIGN_IN.url} component={SignIn} />
        <Route exact path={paths.SIGN_UP.url} component={SignUp} />
      </AuthTemplate>
    </Switch>
  )
}

export default Routes