import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { errorToast, success, warning } from '../../utils/toast';
import {
  fetchWithoutBody,
  fetchWithBody,
  convertStringToDateMoreYear,
  validateDate,
} from '../../utils/utils';
import FormComponent from './FormComponent';

const initialInput = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: new Date(),
  date_revision: new Date(),
};

const Form = () => {
  const [inputs, setInputs] = useState(initialInput);
  const [update, setUpdate] = useState(false);
  const { id = null } = useParams();

  useEffect(() => {
    fetchWithoutBody({
      url: 'bp/products/verification',
      method: 'GET',
      idUrl: `?id=${id}`,
    }).then((response) => {
      setUpdate(response);
      if (!!response) {
        validateForm();
      }
    });
    // eslint-disable-next-line
  }, []);

  const validateForm = () => {
    fetchWithoutBody({ url: 'bp/products' }).then((response) => {
      const newInput = response.find((data) => data.id === id);
      newInput.date_release = newInput.date_release.split('T')[0];
      newInput.date_revision = convertStringToDateMoreYear(
        newInput.date_release
        );
        setInputs(newInput);
      });
    };

  const onChange = (e) => {
    try {
      let updatedInputs = {
        ...inputs,
        [e.target.name]: e.target.value,
      };

      // asignación a input fecha de revisión
      if (e.target.name === 'date_release') {
        updatedInputs.date_revision = convertStringToDateMoreYear(
          e.target.value
        );
      }

      setInputs(updatedInputs);
    } catch (error) {
      warning('Debe elegir una fecha');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (validateDate(inputs.date_release)) {
        warning('La fecha de liberacion no es válida');
        return;
      }

      const params = { url: 'bp/products', ...inputs };

      if (!!update) {
        params.method = 'PUT';
      }

      fetchWithBody(params)
        .then((response) => {
          if (!!response.error) {
            errorToast(response.message);
            return;
          }
          success('Operación exitosa');

          if (!update) {
            resetInput();
          }
        })
        .catch((error) => {
          errorToast(error);
        });
    } catch (error) {
      errorToast(error.message);
    }
  };

  const isFormValid = () => {
    return (
      inputs.id.length >= 3 &&
      inputs.id.length <= 10 &&
      inputs.name.length >= 5 &&
      inputs.name.length <= 100 &&
      inputs.logo.length >= 10 &&
      inputs.logo.length <= 2000 &&
      inputs.description.length >= 10 &&
      inputs.description.length <= 200
    );
  };

  const resetInput = () => {
    setInputs(initialInput);
  };

  return (
    <FormComponent
      handleSubmit={handleSubmit}
      onChange={onChange}
      update={update}
      inputs={inputs}
      resetInput={resetInput}
      isFormValid={isFormValid}
    ></FormComponent>
  );
};

export default Form;
