import React, { useState } from 'react';
import TableComponent from './TableComponent';

const ITEMS_PAGE = 5;

const Table = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const COUNT_ITEMS = data.length;

  const paginatedData = () => {
    const start = (currentPage - 1) * ITEMS_PAGE;
    return data.slice(start, start + ITEMS_PAGE);
  };

  const totalPages = Math.ceil(data.length / ITEMS_PAGE);

  return (
    <TableComponent
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      paginatedData={paginatedData}
      COUNT_ITEMS={COUNT_ITEMS}
      totalPages={totalPages}
    />
  );
};

export default Table;
