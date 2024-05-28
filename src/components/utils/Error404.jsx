import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

const Error404 = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
      <div className="container">
        <Link to={'/'} className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white">
          Ecommerce
        </Link>
      <Spinner/>
      </div>
    </nav>
    {/* End Navbar */}
    <main className="main-content  mt-0">
    <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
       style={{backgroundImage: 'url("https://images.livspace-cdn.com/w:1440/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2024-1704560007-SGQ6F/existing-real-home-assets-1704643706-yeqEk/new-folder-1704645244-RgitI/2-contemporary-1704645269-NaNVu.jpg")',
        backgroundPosition: 'center',
        backgroundColor:"#23454"}}>
          <span className="mask bg-gradient-dark opacity-6" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 text-center mx-auto">
              <h1 className="text-white mb-2 mt-5">Ups! 404 </h1>
              <p className="text-lead text-white">Parece que estas perdido </p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div className="card z-index-0">
            <div className="card-header text-center pt-4">
            <h5>404</h5>
            <p className="text-sm mt-3 mb-0">
            Probablemente estes en una ruta por error.
            </p>
            </div>
          
            <div className="card-body">
            <p className="text-sm mt-3 mb-0">
            Vovler al <Link to={'/'} className="text-dark font-weight-bolder">Inicio</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    {/* -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- */}
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-8 mb-4 mx-auto text-center">
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Company
            </a>
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              About Us
            </a>
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Team
            </a>
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Products
            </a>
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Blog
            </a>
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
              Pricing
            </a>
          </div> */}
          {/* <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-dribbble" />
            </a>
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-twitter" />
            </a>
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-instagram" />
            </a>
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-pinterest" />
            </a>
            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
              <span className="text-lg fab fa-github" />
            </a>
          </div> */}
        </div>
        <div className="row">
          <div className="col-8 mx-auto text-center mt-1">
            <p className="mb-0 text-secondary">
              Copyright ©  Soft by Creative Tim. Edited By Luis Fernando
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Error404