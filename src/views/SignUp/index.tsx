import React, { useState, useEffect } from 'react'
import MaskedInput from 'react-text-mask'
import { useHistory } from 'react-router-dom'
import { MdEmail, MdLock, MdPerson, MdPhone } from 'react-icons/md'
import { useForm, Controller } from 'react-hook-form'

import { useAuthState } from 'react-firebase-hooks/auth'

import {
  FormContainer,
  FormErrorMessage,
  FormGroup,
  FormLabel,
  UiButton,
  UiInput
} from 'components/UI'

import {
  addDoc,
  auth,
  collection,
  createUserWithEmailAndPassword,
  db
} from 'helpers/utils/firebase'

import { PATHS } from 'helpers/configs/paths'

import { IUserData } from './types'

const { DASHBOARD, SIGN_IN } = PATHS

const SignUp = () => {
  const [user, loading] = useAuthState(auth)
  const history = useHistory()
  const { control, handleSubmit, formState: { errors } } = useForm<IUserData>()
  const [passwordShow, setPasswordShow] = useState(false)

  useEffect(() => {
    if (loading) return
    if (user) history.push(DASHBOARD.url)
  }, [user, loading, history])

  const toggleType = () => {
    setPasswordShow(passwordShow ? false : true)
  }

  const registerWithEmailAndPassword = async (email, password, name, phone) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res?.user
      await addDoc(collection(db, 'Users'), {
        uid: user?.uid,
        name,
        phone,
        authProvider: 'local',
        email,
      })

      history.push(DASHBOARD.url)
    } catch (err) {
      console.error(err)
      alert(err)
    }
  }

  const onSubmit = values => {
    if (values.email && values.password && values.name && values.phone) {
      registerWithEmailAndPassword(values.email, values.password, values.name, values.phone)
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

  const inputPhone = field => (
    <UiInput
      icon={MdPhone}
      className={errors?.phone && 'error'}
      maskInput={MaskedInput}
      mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      type="text"
      id="phone"
      {...field}
    />
  )

  const inputName = field => (
    <UiInput
      className={errors?.name && 'error'}
      icon={MdPerson} {...field}
      id="name"
      type="text"
    />
  )

  return (
    <>
      <h1>Cadastre-se</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer className="form-vertical">
          <FormGroup>
            <FormLabel htmlFor="name">
              Nome completo
            </FormLabel>

            <Controller
              name="name"
              render={({ field }) => inputName(field)}
              control={control}
              rules={{
                required: 'Campo obrigatório',
              }}
            />

            <FormErrorMessage>{errors?.name?.message }</FormErrorMessage>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">
              E-mail
            </FormLabel>
            <Controller
              name="email"
              render={({ field }) => <UiInput className={errors?.email && 'error'} icon={MdEmail} {...field} />}
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
            <FormLabel htmlFor="phone">
              Telefone
            </FormLabel>

            <Controller
              name="phone"
              render={({ field }) => inputPhone(field)}
              control={control}
              rules={{
                required: 'Campo obrigatório',
              }}
            />

            <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
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

          <FormGroup>
            <UiButton type="submit" className="block">
              Cadastrar
            </UiButton>
          </FormGroup>
        </FormContainer>
      </form>

      <p>
        Já tem cadastro?
        <a
          href={SIGN_IN.url}
          title="Clique aqui para entrar"
        >
          Clique aqui.
        </a>
      </p>
    </>
  )
}

export default SignUp
