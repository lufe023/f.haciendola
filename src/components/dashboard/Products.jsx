import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Aside from './Aside';
import Header from './Header';
import MiniCards from './MiniCards';
import Footer from './Footer';
import CategoriesCard from './CategoriesCard';
import Carousel from './Carousel';
import { useSelector } from 'react-redux';
import Card from './Card';
import axios from 'axios';
import getConfig from "../utils/getConfig";
import Spinner from "../utils/Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 10,
    count: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const maxPageButtons = 5; // Número máximo de botones de página que deseas mostrar
  
  const getAllProducts = (page = 1, URL) => {
    setLoading(true);
    !URL?
     URL = `${import.meta.env.VITE_API_SERVER}/api/v1/products?offset=${(page - 1) * pagination.limit}&limit=${pagination.limit}`
     :URL=URL
  
    axios.get(URL, getConfig())
      .then(res => {
        setProducts(res.data.products);
        setPagination(prev => ({
          ...prev,
          count: res.data.total,
        }));
        setCurrentPage(page);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllProducts(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(pagination.count / pagination.limit);
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  let menu = useSelector(state => state.pageSlice);
 
  return (
    <>
      <div className={`g-sidenav-show bg-gray-100 ${menu ? 'g-sidenav-pinned' : ''}`}>
        <Header />
        <Aside />
        <main className="main-content position-relative border-radius-lg">
          <NavBar />
          <div className="container-fluid py-4">
          <MiniCards/>
            <div className="row" style={{ minHeight: "120px" }}>
            </div>
            <div className="form-group col-12">
              <label>Productos por Página</label>
              <div className="input-group">
                <select
                  className="form-control"
                  value={pagination.limit}
                  onChange={(e) => {
                    const newLimit = parseInt(e.target.value, 10);
                    setPagination(prev => ({
                      ...prev,
                      limit: newLimit,
                    }));
                    setCurrentPage(1);
                  }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={70}>70</option>
                  <option value={100}>100</option>
                </select>
                <span className="input-group-text" onClick={() => getAllProducts(1)} style={{ cursor: "pointer" }}><i className="fas fa-search" /></span>
              </div>
            </div>
            
            {loading &&<div style={{width:"100%", display:"flex", justifyContent:"center"}}> <Spinner /></div>}
            <div className="row">
              
              {products.map(product => (
                <Card key={product.id} product={product} />
              ))}
            </div>
            <div className="card-footer">
              <nav aria-label="Contacts Page Navigation">
                <ul className="pagination justify-content-center m-0">
                  {startPage > 1 && (
                    <li className="page-item">
                      <button className="page-link" onClick={() => setCurrentPage(1)}>1</button>
                    </li>
                  )}
                  {startPage > 2 && <li className="page-item disabled"><span className="page-link">...</span></li>}
                  {pages.map(page => (
                    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
                    </li>
                  ))}
                  {endPage < totalPages - 1 && <li className="page-item disabled"><span className="page-link">...</span></li>}
                  {endPage < totalPages && (
                    <li className="page-item">
                      <button className="page-link" onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default Products;
