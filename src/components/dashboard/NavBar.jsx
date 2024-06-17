import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateMenu} from '../../store/slices/page.slice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cart from '../cart/Cart';

const NavBar = ({toggleButtonRef}) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [searchTerm, setSearchTerm] = useState(query.get('query') || '');
  const menu = useSelector(state => state.pageSlice.menu);

  const user = useSelector(state => state.userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  const handleMenuToggle = () => {
    dispatch(updateMenu(!menu));
  };

  return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="false">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><Link to={'/'} className="opacity-5 text-white" href="#">Inicio</Link></li>
            <li className="breadcrumb-item text-sm text-white active" aria-current="page">
            <Link to={`/${location.pathname.split('/')[1]}`} className='text-white'>
            {location.pathname.charAt(1).toUpperCase() }
      
            {location.pathname.split('/')[1].slice(1) + " "}
            </Link>
            {location.pathname.split('/')[2] && "/" + location.pathname.split('/')[2]}</li>
          </ol>
          <h6 className="font-weight-bolder text-white mb-0">
            {location.pathname.charAt(1).toUpperCase() 
            + location.pathname.split('/')[1].slice(1) + " "}
            {location.pathname.split('/')[2] && "/" + location.pathname.split('/')[2]}
          </h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
          {
                location.pathname=='/search'?"":
            <div className="input-group">
              <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true" /></span>
             
                <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar producto" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
            
              
            </div>
          }
          </div>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="#" className="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-user me-sm-1" />
                <span className="d-sm-inline d-none">{user.firstName} {user.lastName}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li className="mb-2">
                  <div className="dropdown-item border-radius-md">
                    <div className="d-flex py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <a className="nav-link">
                          <i className="fa fa-user me-sm-1" />
                          <span className="nav-link-text ms-1">Perfil</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="dropdown-item border-radius-md">
                    <div className="d-flex py-1">
                      <div className="d-flex flex-column justify-content-center">
                        <Link to={'/logout'} className="nav-link">
                          <i className="fa fa-power-off" />
                          <span className="nav-link-text ms-1"> Cerrar Sesión</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
  <a className="nav-link text-white p-0">
    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" aria-hidden="true" />
  </a>
</li>

            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
            <Link onClick={handleMenuToggle} className="nav-link text-white p-0" id="iconNavbarSidenav" ref={toggleButtonRef}>
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line bg-white" />
                  <i className="sidenav-toggler-line bg-white" />
                  <i className="sidenav-toggler-line bg-white" />
                </div>
              </Link>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              {/* Other nav items can go here */}
            </li>
          </ul>
        </div>
      </div>
      {/* <Cart/> */}
    </nav>
  );
};

export default NavBar;
