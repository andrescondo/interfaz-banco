import { useMemo, useState } from 'react';

/**useSearchFilter
 * @description Funcion encargada de filtrar los valores del array original
 * @param data Array Valor original sobre la que se va a filtrar
 * 
 * @return query: valor asignado al valur del input
 * @return setQuery funcion asignada al onchange del input
 * @return filterProducts: array filtrado
 * 
*/
export default function useSearchFilter(data) {
  const [query, setQuery] = useState('');
  const [filterProducts, setFilterProducts] = useState(data);

  useMemo(() => {
    const result = data.filter((data) => {
      return `${data.name.toLowerCase()}`.includes(query.toLowerCase());
    });
    setFilterProducts(result);
  }, [data, query]);
  return { query, setQuery, filterProducts };
}
