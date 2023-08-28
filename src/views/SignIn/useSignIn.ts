import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth, signInWithEmailAndPassword } from 'helpers/utils/firebase'
import { TIMEOUT } from 'helpers/utils/constants'

export const useSignIn = () => {
  const [loader, setLoader] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [user, loading] = useAuthState(auth)

  const timeout = () => {
    setTimeout(() => {
      setLoader(false)
    }, TIMEOUT)
  }

  const getError = (code: string) => {
    const type = {
      'auth/user-not-found': 'Dados inválidos',
    }

    return type[code] ?? ''
  }

  const login = async (email, password) => {
    setLoader(true)
    setError('')

    await signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Successfully signed in!', userCredential)
      })
      .catch(err => {
        console.error('Erro no login > code:', err.code)
        console.error('Erro no login > message:', err.message)

        const msg = getError(err.code)

        setError(msg)
      })
      .finally(timeout)
  }

  return {
    login,
    loader,
    error,
    user,
    loading,
  }
}
