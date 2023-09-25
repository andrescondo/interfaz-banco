import { toast } from 'react-toastify';


/**success
 * @description Funcion encargada de mostrar una alerta especifica para cada situación
 * @param data String Texto a mostrar
 * 
*/
export const success = (data) => {
  return toast.success(data, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};


/**warning
 * @description Funcion encargada de mostrar una alerta especifica para cada situación
 * @param data String Texto a mostrar
 * 
*/
export const warning = (data) => {
  return toast.warn(data, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};


/**errorToast
 * @description Funcion encargada de mostrar una alerta especifica para cada situación
 * @param data String Texto a mostrar
 * 
*/
export const errorToast = (data) => {
  return toast.error(data, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};


/**info
 * @description Funcion encargada de mostrar una alerta especifica para cada situación
 * @param data String Texto a mostrar
 * 
*/
export const info = (data) => {
  return toast.info(data, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
