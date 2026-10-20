import './field-element.css'
export const FormElement = ({
  label,
  data,
  registerFunc,
  registerSettings = { required: false },
  errorText = false,
  type,
}) => {
  return (
    <label className="label">
      <span className="labelName">{label}</span>
      <input noValidate className="input" {...registerFunc(data, registerSettings)} type={type} />
      {errorText && <span className="error">{errorText}</span>}
    </label>
  )
}
