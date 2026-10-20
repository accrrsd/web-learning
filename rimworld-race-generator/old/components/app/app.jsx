import React from 'react'
import { useForm } from 'react-hook-form'
import { FormElement } from '../field-element/field-element'
import { FieldComponent } from '../field/field'
import { yupResolver } from '@hookform/resolvers/yup'
import './app.css'
import * as yup from 'yup'
import { Header } from '../header/header'
import { Tab } from '../tab/tab'
function App() {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
      .required('First name is a required field'),
    // lastName: yup
    //   .string()
    //   .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    //   .required('Last name is a required field'),
  })
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <div className="App">
      <div className="background"></div>
      <Header />
      <div className="tabs">
        <Tab text="Main" active />
        <Tab text="General" />
        <Tab text="Draw" />
        <Tab text="Stats" />
        <Tab text="Life" />
        <Tab text="Other" />
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <FieldComponent name="Main settings">
          <FormElement
            label="Название расы"
            data="firstName"
            registerFunc={register}
            type="text"
            registerSettings={{ required: true }}
            errorText={errors?.firstName?.message}
          />
        </FieldComponent>
        <input className="formSubmit" type="submit" value="Сохранить" />
      </form>
    </div>
  )
}
export default App
