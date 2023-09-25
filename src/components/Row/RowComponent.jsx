import { Link } from 'react-router-dom';
import { ThreeDotsVertical } from 'react-bootstrap-icons';

const RowComponent = ({ item, visible, visibleBox, deleteItem }) => {
  return (
    <tr key={item.id} data-testid={'menu-1'}>
      <td>
        <img
          loading="lazy"
          src={item.logo}
          alt={item.name}
          style={{ width: '50px' }}
        />
      </td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{new Date(item.date_release).toLocaleDateString()}</td>
      <td>{new Date(item.date_revision).toLocaleDateString()}</td>
      <td className="three-dot">
        <span onClick={visibleBox}>
          <ThreeDotsVertical />
        </span>
        <div className={`three-dot__float ${visible && 'visible'}`}>
          <span>
            <Link to={`/form/${item.id}`}>Editar</Link>
          </span>
          <div onClick={() => deleteItem(item.id)}>Eliminar</div>
        </div>
      </td>
    </tr>
  );
};

export default RowComponent;
