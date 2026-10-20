import style from './main-content.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormElement } from '../../form-element/form-element'
import * as yup from 'yup'

export const MainContent = () => {
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
    <div className={style.test}>
      <FormElement
        label="Название расы"
        data="firstName"
        registerFunc={register}
        type="text"
        registerSettings={{ required: true }}
        errorText={errors?.firstName?.message}
      />
    </div>
  )
}
