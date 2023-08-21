import React, { useState, useEffect } from 'react'
import { MdEmail, MdLock, } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { useAuthState } from 'react-firebase-hooks/auth'

import { 
  FormContainer, 
  FormErrorMessage,
  FormGroup,
  FormLabel,
  UiInput,
  UiButton
} from 'components/UI'

import { auth, signInWithEmailAndPassword } from 'helpers/utils/firebase'
import { paths } from 'helpers/configs/paths'

import { IUserData } from './types'

const SignIn: React.FC = () => {
  const history = useHistory()
  const [user, loading] = useAuthState(auth)
  const [passwordShow, setPasswordShow] = useState(false)
  const [loader, setLoader] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm<IUserData>()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }

    if (user) {
      history.push(paths.DASHBOARD.url)
    }
  }, [user, loading, history]);

  const toggleType = () => {
    setPasswordShow(passwordShow ? false : true) 
  }

  const login = async (email, password) => {
    setLoader(true)
  
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err)
      alert(err.message)
      setLoader(false)
    }
  }

  const onSubmit = values => {
    if (values.email && values.password) {
      login(values.email, values.password)
    }
  }

  const inputPassw = field => (
    <UiInput 
      className={errors?.password && 'error'} 
      icon={MdLock}
      id="passw"
      type={passwordShow ? "text" : "password"} 
      {...field} 
    />
  )

  const inputEmail = field => (
    <UiInput 
      className={errors?.email && 'error'} 
      icon={MdEmail} 
      {...field} 
    />
  )

  return (
    <>
      <h1>Entrar</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer className="form-vertical">
          <FormGroup>
            <FormLabel htmlFor="email">
              E-mail
            </FormLabel>

            <Controller
              name="email"
              render={({ field }) => inputEmail(field)}
              control={control}
              rules={{ 
                required: 'Campo obrigatório',  
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Digite um email válido',
                }
              }}
            />

            <FormErrorMessage>{errors?.email?.message }</FormErrorMessage>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="passw">
              <span>Senha</span>
              <small onClick={toggleType}>
                {passwordShow ? "Ocultar" : "Mostrar"}
              </small>
            </FormLabel>

            <Controller
              name="password"
              render={({ field }) => inputPassw(field)}
              control={control}
              rules={{ 
                required: 'Campo obrigatório',  
              }}
            />

            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormGroup>
        
        <UiButton
          type="submit"
          icon=""
          className="block"
          isLoading={loader}
          disabled={loader}
        >
          Acessar
        </UiButton>
        </FormContainer>
      </form>

      <p>
        Não tem cadastro? 
        <a 
          href={paths.SIGN_UP.url}
          title="Clique aqui e cadastre-se"
        >
          Clique aqui
        </a>
      </p>
    </>
  )
}

export default SignIn