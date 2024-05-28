import React from 'react'
import NavBar from './NavBar'
import MiniCards from './MiniCards'
import Carousel from './Carousel'
import CategoriesCard from './CategoriesCard'
import Footer from './Footer'

const PanelArea = () => {
  return (
  <main className="main-content position-relative border-radius-lg ">
  {/* Navbar */}
    <NavBar/>
  {/* End Navbar */}
  <div className="container-fluid py-4">

   <MiniCards/>
    <div className="row mt-4" >
      <div className="col-lg-7 mb-lg-0 mb-4 "style={{minHeight:"500px"}}>
      <Carousel/>
      </div>

    <div className="col-lg-5">
    <CategoriesCard/>
    </div>
    
    </div>
    <div className="row mt-4">
      <div className="col-lg-7 mb-lg-0 mb-4">
        <div className="card ">
          <div className="card-header pb-0 p-3">
            <div className="d-flex justify-content-between">
              <h6 className="mb-2">Sales by Country</h6>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table align-items-center ">
              <tbody>
                <tr>
                  <td className="w-30">
                    <div className="d-flex px-2 py-1 align-items-center">
                      <div>
                        <img src="./assets/img/icons/flags/US.png" alt="Country flag" />
                      </div>
                      <div className="ms-4">
                        <p className="text-xs font-weight-bold mb-0">Country:</p>
                        <h6 className="text-sm mb-0">United States</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <p className="text-xs font-weight-bold mb-0">Sales:</p>
                      <h6 className="text-sm mb-0">2500</h6>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <p className="text-xs font-weight-bold mb-0">Value:</p>
                      <h6 className="text-sm mb-0">$230,900</h6>
                    </div>
                  </td>
                  <td className="align-middle text-sm">
                    <div className="col text-center">
                      <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                      <h6 className="text-sm mb-0">29.9%</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-30">
                    <div className="d-flex px-2 py-1 align-items-center">
                      <div>
                        <img src="./assets/img/icons/flags/DE.png" alt="Country flag" />
                      </div>
                      <div className="ms-4">
                        <p className="text-xs font-weight-bold mb-0">Country:</p>
                        <h6 className="text-sm mb-0">Germany</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <p className="text-xs font-weight-bold mb-0">Sales:</p>
                      <h6 className="text-sm mb-0">3.900</h6>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <p className="text-xs font-weight-bold mb-0">Value:</p>
                      <h6 className="text-sm mb-0">$440,000</h6>
                    </div>
                  </td>
                  <td className="align-middle text-sm">
                    <div className="col text-center">
                      <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                      <h6 className="text-sm mb-0">40.22%</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-30">
                    <div className="d-flex px-2 py-1 align-items-center">
                      <div>
                        <img src="./assets/img/icons/flags/GB.png" alt="Country flag" />
                      </div>
                      <div className="ms-4">
                        <p className="text-xs font-weight-bold mb-0">Country:</p>
                        <h6 className="text-sm mb-0">Great Britain</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <p className="text-xs font-weight-bold mb-0">Sales:</p>
                      <h6 className="text-sm mb-0">1.400</h6>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <p className="text-xs font-weight-bold mb-0">Value:</p>
                      <h6 className="text-sm mb-0">$190,700</h6>
                    </div>
                  </td>
                  <td className="align-middle text-sm">
                    <div className="col text-center">
                      <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                      <h6 className="text-sm mb-0">23.44%</h6>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-30">
                    <div className="d-flex px-2 py-1 align-items-center">
                      <div>
                        <img src="./assets/img/icons/flags/BR.png" alt="Country flag" />
                      </div>
                      <div className="ms-4">
                        <p className="text-xs font-weight-bold mb-0">Country:</p>
                        <h6 className="text-sm mb-0">Brasil</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <p className="text-xs font-weight-bold mb-0">Sales:</p>
                      <h6 className="text-sm mb-0">562</h6>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      <p className="text-xs font-weight-bold mb-0">Value:</p>
                      <h6 className="text-sm mb-0">$143,960</h6>
                    </div>
                  </td>
                  <td className="align-middle text-sm">
                    <div className="col text-center">
                      <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                      <h6 className="text-sm mb-0">32.14%</h6>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <CategoriesCard/>
      </div>
    </div>
   <Footer/>
  </div>
</main>

  )
}

export default PanelArea