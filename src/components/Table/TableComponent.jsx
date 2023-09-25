import Row from '../Row';

import '../../styles/Table.css';

const TableComponent = ({
  setCurrentPage,
  paginatedData,
  COUNT_ITEMS,
  totalPages,
  currentPage,
}) => {
  return (
    <div className="table-container">
      <div className="border-table">
        <table className="table-main">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Nombre del producto</th>
              <th>
                Descripción
                <i className="information">i</i>
              </th>
              <th>
                Fecha de liberación
                <i className="information">i</i>
              </th>
              <th>
                Fecha de reestructuración
                <i className="information">i</i>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData()?.map((item) => (
              <Row item={item} key={item.id}></Row>
            ))}
          </tbody>
        </table>
      <div className='table-line'>
        <div  className='table-line__box'>

        </div>
        
      </div>
      </div>


      <div className="table-bottom">
        <span>{COUNT_ITEMS} Resultados</span>

        <div>
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;