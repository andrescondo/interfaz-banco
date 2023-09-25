import Table from '../../components/Table';

import { Link } from 'react-router-dom';

const HomeComponent = ({ data, setQuery, query }) => {
  return (
    <div className="home-container">
      <div className="home-container__logo">
        <img
          src="https://www.pichincha.com/content/published/api/v1.1/assets/CONT7950B3A6841A44C9A0B87D33A017CDAF/native?cb=_cache_1062&channelToken=712a6518832146c488cdf196228d8c00"
          alt="logo"
          loading="lazy"
          width={400}
        />
      </div>
      <div className="home-container__action">
        <input
          type="search"
          placeholder="Search..."
          autoComplete="off"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        <Link to={'form'} className="button-redirect">
          Agregar
        </Link>
      </div>
      <Table data={data} />
    </div>
  );
};

export default HomeComponent;
