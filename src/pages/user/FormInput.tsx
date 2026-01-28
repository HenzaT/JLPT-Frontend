const FormInput = (
  field: string,
  label: string,
  type: string,
  placeholder: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  required: boolean
) => (
  <div className="label-input">
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
  </div>
)

export default FormInput;
