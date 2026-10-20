import './field.css'
export const FieldComponent = ({ name, children }) => {
  return (
    <fieldset className="field" name={name}>
      <h4 className="fieldName">{name}</h4>
      {children}
    </fieldset>
  )
}
