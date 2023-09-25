import { errorToast, warning } from './toast';

export const API =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  authorId: '1102815808',
};

/** fetchWithBody
 * @description Función para generar peticiones a servicios externos, usa body, 
 * y esta diseñada especialmente para petciiones de tipo POST, PUT
 * @param data object contiene el cuerpo de la consulta 
 * 
 * @returns object con informacion de la respuesta de la consulta
 * **/
export const fetchWithBody = async (data) => {
  const { url, idUrl, method, ...rest } = data;
  return fetch(`${API}${url}${idUrl ? idUrl : ''}`, {
    method: `${method ? method : 'POST'}`,
    headers: headers,
    body: JSON.stringify(rest),
  })
    .then((response) => {
      if (response.status !== 200) {
        return response.text().then((errorText) => {
          throw new Error(errorText);
        });
      }
      return response.json();
    })
    .catch((err) => {
      return { message: err.toString(), error: true };
    });
};


/** fetchWithoutBody
 * @description Función para generar peticiones a servicios externos, NO usa body, 
 * y esta diseñada especialmente para petciiones de tipo GET, DELETE
 * @param data object contiene el cuerpo de la consulta 
 * 
 * @returns object con informacion de la respuesta de la consulta
 * **/
export const fetchWithoutBody = (data) => {
  try {
    const { url, idUrl, method } = data;
    return fetch(`${API}${url}${idUrl ? idUrl : ''}`, {
      method: `${method ? method : 'GET'}`,
      headers: headers,
    })
      .then((response) => {
        if (response.status !== 200) {
          return response.text().then((errorText) => {
            throw new Error(errorText);
          });
        }
        return response.json();
      })
      .catch((err) => {
        return { message: err.toString(), error: true };
      });
  } catch (error) {
    errorToast(error.message)
  }
};


/***convertStringToDateMoreYear
 * @description Funcion Convertidora de texto a Fecha
 *
 * @param text String Fecha seleccionada en input - date
 * 
 * @returns Date
*/
export const convertStringToDateMoreYear = (text) => {
  try {
    const nextYear = new Date(text);
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    return nextYear.toISOString().split('T')[0];
  } catch (error) {
    warning('Debe elegir una fecha');
  }
};

/**validateDate
 * @description Funcion validadora de la fecha seleccionada sea mayor o igual a la fecha actual
 * @param date String Fecha seleccionada en input - date
 * 
 * @returns Boolean
*/
export const validateDate = (date) => {
  const dateToCheck = new Date(date);
  const currentDate = new Date();

  currentDate.setHours(0, 0, 0, 0);

  if (dateToCheck >= currentDate) {
    return false;
  } else {
    return true;
  }
};
