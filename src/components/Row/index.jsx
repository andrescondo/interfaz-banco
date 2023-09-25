import React, { useState } from 'react';
import { fetchWithoutBody } from '../../utils/utils';
import { info } from '../../utils/toast';
import RowComponent from './RowComponent';

const Row = ({ item }) => {
  const [visible, setVisible] = useState(false);

  const visibleBox = () => {
    setVisible(!visible);
  };

  const deleteItem = (id) => {
    fetchWithoutBody({
      url: 'bp/products',
      method: 'DELETE',
      idUrl: `?id=${id}`,
    }).then((response) => {
      let message =
        'Revisar nota en archivo src/components/Row/index.jsx linea: 23';
      info(message);
    });
    /*** NOTA
     * Se siguio con los lineamientos del ejercicio propuesto para la eliminacion de
     * productos financieros, pero el servicio api responde "You must be the owner"
     * aún cuando se envia correctamente el id en la url, y el authorId en el header
     */
  };

  return (
    <RowComponent
      item={item}
      visible={visible}
      visibleBox={visibleBox}
      deleteItem={deleteItem}
    />
  );
};

export default Row;
