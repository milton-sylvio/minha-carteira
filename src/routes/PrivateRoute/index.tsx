import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Route, Redirect } from 'react-router-dom'

import InternalPagesTemplate from 'templates/InternalPages'

import { auth } from 'helpers/utils/firebase'
import { PATHS } from 'helpers/configs/paths'

import { IPrivateRoute } from './types'

const { SIGN_IN } = PATHS

export const PrivateRoute = ({ component: Component, ...rest }: IPrivateRoute) => {
  const [user] = useAuthState(auth)

  return (
    <Route
      {...rest}
      render={props => {
        if (!user) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect to={{ pathname: SIGN_IN.url, state: { from: props.location } }} />
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
