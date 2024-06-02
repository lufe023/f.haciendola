import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../dashboard/Header';
import Aside from '../dashboard/Aside';
import CategoriesCard from './CategoriesCard';
import { useLocation } from 'react-router-dom';
import CategoryEdit from './CategoryEdit';
import { setPageData } from '../../store/slices/page.slice';

const CategoriesPage = () => {
    let menu = useSelector(state => state.pageSlice);
    const location = useLocation();
    const dispatch = useDispatch()
    const handleHeaderFocus = () => {
      dispatch(setPageData(false))
    };

  return (
    <div onFocus={handleHeaderFocus} className={`g-sidenav-show bg-gray-100 ${menu ? 'g-sidenav-pinned' : ''}`}>
       <Header />
        <Aside />
        <main className="main-content position-relative border-radius-lg">
        <div className="card shadow-lg mx-4 card-profile-bottom">
        {
          location.pathname === "/categories"?<CategoriesCard/>:<CategoryEdit/>
        }        
        </div>



<div className="container-fluid py-4">
    </div>
    </main>
</div>
  )
}

export default CategoriesPage