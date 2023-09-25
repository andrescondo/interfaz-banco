
const InputComponent = ({
  type,
  name,
  min,
  max,
  value,
  onChange,
  disabled,
  className,
  title,
  errorMessage,
}) => {
  return (
    <label className="container-input" htmlFor={name}>
      <span className="container-input__title">{title}</span>
      <input
        type={type}
        name={name}
        id={name}
        minLength={min}
        maxLength={max}
        required
        value={value}
        onChange={onChange}
        disabled={disabled}
        data-testid={name}
        min={type === 'date' && new Date()}
        placeholder={type === 'text' ? title : ''}
        className={className}
      />
      <div className="container-input__message">
        <span>{type === 'text' && errorMessage}</span>
      </div>
    </label>
  );
};

export default InputComponent;
