import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FindProducts from './FindProducts';
import Header from '../dashboard/Header';
import Aside from '../dashboard/Aside';
import { useSelector } from 'react-redux';

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [searchTerm, setSearchTerm] = useState(query.get('query'));
  const navigate = useNavigate();
  let menu = useSelector(state => state.pageSlice.menu);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() && searchTerm.length>3) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
        <div className={`g-sidenav-show bg-gray-100 ${menu ? 'g-sidenav-pinned' : ''}`}>
        <Header/>
        <Aside/>
        <main className="main-content position-relative border-radius-lg">
          <div className="card shadow-lg mx-4 card-profile-bottom">
          <div className="card-body p-3">

  
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span onClick={handleSearch} className="input-group-text text-body">
                <i className="fas fa-search" aria-hidden="true" /></span>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar producto" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
          </div>
  </div>
</div>

          <div className="container-fluid py-4">
              <h1 style={{height:"100px", padding:"20px"}}>Resultados de búsqueda</h1>
          <FindProducts searchTerm={searchTerm} />
      </div>
      </main>
    </div>
  );
};

export default SearchPage;
