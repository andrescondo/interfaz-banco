import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import '../../styles/Form.css';

const FormComponent = ({
  handleSubmit,
  inputs,
  onChange,
  update,
  resetInput,
  isFormValid,
}) => {
  return (
    <div className="form-container">
      <div className="form-container__logo">
        <Link to={'/'}>
          <img
            src="https://www.pichincha.com/content/published/api/v1.1/assets/CONT7950B3A6841A44C9A0B87D33A017CDAF/native?cb=_cache_1062&channelToken=712a6518832146c488cdf196228d8c00"
            alt="logo"
            loading="lazy"
            width={300}
          />
        </Link>
      </div>
      <div className="form-container__box">
        <h2>Formulario de Registro</h2>
        <form className="form-container__card" onSubmit={handleSubmit}>
          <Input
            title="ID"
            name="id"
            type="text"
            min={3}
            max={10}
            disabled={update ? true : false}
            value={inputs.id}
            onChange={onChange}
          ></Input>
          <Input
            title="Nombre"
            name="name"
            type="text"
            min={5}
            max={100}
            disabled={false}
            value={inputs.name}
            onChange={onChange}
          ></Input>
          <Input
            title="Descripción"
            name="description"
            type="text"
            min={10}
            max={200}
            disabled={false}
            value={inputs.description}
            onChange={onChange}
          ></Input>
          <Input
            title="Logo"
            name="logo"
            type="text"
            min={10}
            max={2000}
            disabled={false}
            value={inputs.logo}
            onChange={onChange}
          ></Input>

          <Input
            title="Fecha de Liberación"
            name="date_release"
            type="date"
            min={10}
            max={200}
            date={true}
            disabled={false}
            value={inputs.date_release}
            onChange={onChange}
          ></Input>

          <Input
            title="Fecha de Revisión"
            name="date_revision"
            type="date"
            min={10}
            max={2000}
            disabled={true}
            value={inputs.date_revision}
            onChange={onChange}
          ></Input>

          <div className="form-container__button">
            <input type="button" value="Reiniciar" onClick={resetInput} />
            <input
              type="submit"
              disabled={!isFormValid()}
              value={update ? 'Actualizar' : 'Enviar'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
