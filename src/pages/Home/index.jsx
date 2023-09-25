import React, { useState, useEffect } from 'react';
import { fetchWithoutBody } from '../../utils/utils';
import useSearchFilter from '../../hooks/useSearchFilter';
import HomeComponent from './HomeComponent';

const Home = () => {
  const [data, setData] = useState([]);

  const { query, setQuery, filterProducts } = useSearchFilter(data);

  useEffect(() => {
    fetchWithoutBody({ url: 'bp/products' }).then((response) => {
      setData(response);
    });
  }, []);

  return (
    <HomeComponent
      query={query}
      setQuery={setQuery}
      data={filterProducts.length !== 0 ? filterProducts : data}
    />
  );
};

export default Home;
