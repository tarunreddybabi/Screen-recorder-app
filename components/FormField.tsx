const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
  error,
  required = false,
}: FormFieldProps) => (
  <div className="form-field">
    <label htmlFor={id}>
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>

    {as === "textarea" ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    ) : as === "select" ? (
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    )}

    {error && <p className="error-text">{error}</p>}
  </div>
);

export default FormField;