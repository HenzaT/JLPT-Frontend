const FormInput = (
  field: string,
  label: string,
  type: string,
  placeholder: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  required: boolean
) => (
  <span className="label-input">
    <label htmlFor={field}>{label}</label>
    <input
      type={type}
      name={field}
      placeholder={placeholder}
      id={field}
      value={value}
      onChange={e => setValue(e.target.value)}
      required={required}
    />
  </span>
)

export default FormInput;
