import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import getCategoryById from './getCategoryById';
import { useDispatch, useSelector } from 'react-redux';
import getCategories from './getCategories';
import axios from 'axios';
import getConfig from '../utils/getConfig';
import Swal from 'sweetalert2';
import deleteCategory from './deleteCategory';


const CategoryEdit = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const dispatch = useDispatch()
    location = location.pathname.split('/')[2]
    
    const [category, setCategory] = useState({
      name: "",
      description: "",
      parent:''
  })
  const [loading, setLoading] = useState(false)

    let categories = useSelector(state => state.dashboardSlice.categories)

    useEffect(() => {
      getCategoryById(location,setCategory)
      getCategories(dispatch)
    }, [])

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCategory({ ...category, [name]: value });
  };

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if(category.name)
      {
          setLoading(true)
      axios.patch(`${import.meta.env.VITE_API_SERVER}/api/v1/categories/${category.id}`, category,getConfig())
          .then(response => {
              setLoading(false)
              getCategories(dispatch)
              const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                      toast.addEventListener("mouseenter", Swal.stopTimer);
                      toast.addEventListener("mouseleave", Swal.resumeTimer);
                  },
              });
              Toast.fire({
                  icon: "success",
                  title: "Cambios Guardados!",
              });

              navigate(localStorage.getItem('redirectPath')=="/login"?'/':localStorage.getItem('redirectPath') || '/');
              // Limpia la ruta almacenada en el estado local
              localStorage.removeItem('redirectPath');
          })
          .catch(error => {
              console.error('Error updating product:', error);
              setLoading(false)
              const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 6000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                      toast.addEventListener("mouseenter", Swal.stopTimer);
                      toast.addEventListener("mouseleave", Swal.resumeTimer);
                  },
              });
  
              Toast.fire({
                  icon: "error",
                  title: `Hubo un error al guardar categoria`,
              });
          });
      }
  };

  return (
    <div className="card-body p-3">
    <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="title" className="form-control-label">Nombre</label>
                            <div className="input-group">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    name="name" 
                                    onChange={handleInputChange}
                                    value={category.name}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="title" className="form-control-label">Descripcion</label>
                            <div className="input-group">
                                <textarea 
                                    className="form-control" 
                                    type="text" 
                                    name="description" 
                                    onChange={handleInputChange}
                                    value={category.description}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="title" className="form-control-label">Categoría Padre</label>
                    <div className="input-group">
                    <select onChange={handleInputChange} defaultValue={category.parent} name='parent' className="form-select" aria-label="Default select example">
                    <option value={0} >Sin padre</option>
                    {categories?.map(category => (
                    <option  key={category.id} value={category.id}>{category.name}</option>
                    ))}
                    </select>
                    </div>
                        
                    </div>
                    <div className="col-md-12">
                    <div className="input-group">
                    <Link to={'/categories'} className={`btn btn-sm btn-warning  mt-3`}>Cancelar</Link>
                    <a onClick={()=>deleteCategory(category.id, category.name, navigate)} className={`btn btn-sm btn-danger  mt-3`}>Borrar</a>
                    <button type="submit" className={`btn btn-sm  mt-3 ${category.name?'btn-dark':'btn-secondary'}`}>Guardar Cambios</button>
                    </div>
                    </div>
                </div>
    </form>
    </div>
  )
}

export default CategoryEdit