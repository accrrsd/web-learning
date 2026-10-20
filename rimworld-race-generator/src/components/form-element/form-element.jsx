import style from './form-element.module.css'
export const FormElement = ({
  label,
  data,
  registerFunc,
  registerSettings = { required: false },
  errorText = false,
  type,
}) => {
  return (
    <label className={style.label}>
      <span className={style.labelName}>{label}</span>
      <input
        noValidate
        className={style.input}
        {...registerFunc(data, registerSettings)}
        type={type}
      />
      {errorText && <span className={style.error}>{errorText}</span>}
    </label>
  )
}
