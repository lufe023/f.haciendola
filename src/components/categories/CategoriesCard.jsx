import React, { useEffect } from 'react'
import getAllCategories from './getCategories'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate} from 'react-router-dom'

const CategoriesCard = ({selectedCategory, setSelectedCategory, product, setProduct}) => {
const dispatch = useDispatch()
const navigate = useNavigate();
  useEffect(() => {
getAllCategories(dispatch)
  }, [])
  
  let categories = useSelector(state => state.dashboardSlice.categories)

  const handleInputChange = (category) => {

    if(product){
    setProduct({ ...product, category: category });
    setSelectedCategory(category)
  }else{
    navigate('/categories/2');
  }
};

  return (
    <div className="card">
    <div className="card-header pb-0 p-3">
      <h6 className="mb-0">Categorías</h6>
    </div>
    <div className="card-body p-3">
      <ul className="list-group">
  

        {categories?.map(category => (
          <li key={category.id} 
          className={`list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg ${selectedCategory==category.id?'active':''}`}>
          <div className="d-flex align-items-center"  style={{paddingLeft:"5px"}}>
            <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
              <i className="ni ni-tag text-white opacity-10" />
            </div>
            <div className="d-flex flex-column ">
              <h6 className="mb-1 text-dark text-sm"
              style={{cursor:product?'pointer':"edit"}}
              onClick={()=>handleInputChange(category.id)}
              >{category.name}</h6>
            </div>
          </div>
          <div className="d-flex">
            <Link to={`/categories/${category.id}`} onClick={()=>localStorage.setItem('redirectPath', '/categories')} className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
              <i className="fas fa-edit" aria-hidden="true"/>
              </Link>
          </div>
        </li>
        ))
      }
      </ul>
    </div>
  </div>
  )
}

export default CategoriesCard