import React from 'react'

const Footer = () => {
  return (
    <footer className="footer pt-3  ">
    <div className="container-fluid">
      <div className="row align-items-center justify-content-lg-between">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <div className="copyright text-center text-sm text-muted text-lg-start">
            © ,
            made with <i className="fa fa-heart" /> by <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative Tim </a>
            for a better web.

            edited by <a href="mailto:lufe023@gmail.com" className="font-weight-bold" target="_blank"> Luis Fernando Gomez </a>
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="nav nav-footer justify-content-center justify-content-lg-end">
            
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer