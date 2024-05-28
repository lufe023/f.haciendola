import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Aside = () => {
  


  return (
  <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ps bg-white " id="sidenav-main">
  <div className="sidenav-header">
    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
    <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
      <img src="./assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
      <span className="ms-1 font-weight-bold">Ecommerce</span>
    </a>
  </div>
  <hr className="horizontal dark mt-0" />
  <div className="collapse navbar-collapse w-auto ps ps--active-y" id="sidenav-collapse-main">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={'/'} className="nav-link" href="./pages/dashboard.html">
          <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
          </div>
          <span className="nav-link-text ms-1">Dashboard</span>
        </NavLink>
      </li>
      <li className="nav-item">
         <NavLink to={'/products'} className="nav-link " href="./pages/tables.html">
          <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i className="fas fa-store text-warning text-sm opacity-10" />

          </div>
          <span className="nav-link-text ms-1">Productos</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="./pages/tables.html">
          <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
          </div>
          <span className="nav-link-text ms-1">Tables</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="./pages/billing.html">
          <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i className="ni ni-credit-card text-success text-sm opacity-10" />
          </div>
          <span className="nav-link-text ms-1">Billing</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="./pages/virtual-reality.html">
          <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i className="ni ni-app text-info text-sm opacity-10" />
          </div>
          <span className="nav-link-text ms-1">Virtual Reality</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="./pages/rtl.html">
          <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i className="ni ni-world-2 text-danger text-sm opacity-10" />
          </div>
          <span className="nav-link-text ms-1">RTL</span>
        </a>
      </li>
      <li className="nav-item mt-3">
        <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="./pages/profile.html">
          <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i className="ni ni-single-02 text-dark text-sm opacity-10" />
          </div>
          <span className="nav-link-text ms-1">Profile</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="./pages/sign-in.html">
          <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i className="ni ni-single-copy-04 text-warning text-sm opacity-10" />
          </div>
          <span className="nav-link-text ms-1">Sign In</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="./pages/sign-up.html">
          <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
            <i className="ni ni-collection text-info text-sm opacity-10" />
          </div>
          <span className="nav-link-text ms-1">Sign Up</span>
        </a>
      </li>
    </ul>
  </div>
  <div className="sidenav-footer mx-3 " style={{ marginTop:"80px"}}>
    <div className="card card-plain shadow-none" id="sidenavCard">
      <img className="w-50 mx-auto" src="./assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration" />
      <div className="card-body text-center p-3 w-100 pt-0">
        <div className="docs-info">
          
          <p className="text-xs font-weight-bold mb-0">Revisa nuestra Documentación</p>
        </div>
      </div>
    </div>
    <a href="https://documenter.getpostman.com/view/25294531/2sA3QmCZbk" target="_blank" className="btn btn-dark btn-sm w-100 mb-3">Documentación</a>
    </div>
</aside>

  )
}

export default Aside