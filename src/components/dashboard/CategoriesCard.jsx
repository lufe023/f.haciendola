import React from 'react'

const CategoriesCard = () => {
  return (
    <div className="card">
    <div className="card-header pb-0 p-3">
      <h6 className="mb-0">Categories</h6>
    </div>
    <div className="card-body p-3">
      <ul className="list-group">
        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div className="d-flex align-items-center">
            <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
              <i className="ni ni-mobile-button text-white opacity-10" />
            </div>
            <div className="d-flex flex-column">
              <h6 className="mb-1 text-dark text-sm">Devices</h6>
              <span className="text-xs">250 in stock, <span className="font-weight-bold">346+ sold</span></span>
            </div>
          </div>
          <div className="d-flex">
            <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
          </div>
        </li>
        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div className="d-flex align-items-center">
            <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
              <i className="ni ni-tag text-white opacity-10" />
            </div>
            <div className="d-flex flex-column">
              <h6 className="mb-1 text-dark text-sm">Tickets</h6>
              <span className="text-xs">123 closed, <span className="font-weight-bold">15 open</span></span>
            </div>
          </div>
          <div className="d-flex">
            <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
          </div>
        </li>
        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div className="d-flex align-items-center">
            <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
              <i className="ni ni-box-2 text-white opacity-10" />
            </div>
            <div className="d-flex flex-column">
              <h6 className="mb-1 text-dark text-sm">Error logs</h6>
              <span className="text-xs">1 is active, <span className="font-weight-bold">40 closed</span></span>
            </div>
          </div>
          <div className="d-flex">
            <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
          </div>
        </li>
        <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
          <div className="d-flex align-items-center">
            <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
              <i className="ni ni-satisfied text-white opacity-10" />
            </div>
            <div className="d-flex flex-column">
              <h6 className="mb-1 text-dark text-sm">Happy users</h6>
              <span className="text-xs font-weight-bold">+ 430</span>
            </div>
          </div>
          <div className="d-flex">
            <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i className="ni ni-bold-right" aria-hidden="true" /></button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default CategoriesCard