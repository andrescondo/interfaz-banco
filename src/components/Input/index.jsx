import InputComponent from './InputComponent';

const Input = (data) => {
  const { title, name, value, type, min, max, onChange, disabled } = data;

  let errorMessage = '';
  let className = '';

  if (type === 'text' && value.length < min) {
    if (name === 'id') {
      errorMessage = `ID no válido!`;
    } else {
      errorMessage = `Este campo es requerido`;
    }
    className = 'error';
  } else if (type === 'text' && value.length > max) {
    errorMessage = `No debe exceder los ${max} caracteres.`;
    className = 'error';
  }

  return (
    <InputComponent
      type={type}
      title={title}
      name={name}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={className}
    />
  );
};

export default Input;
