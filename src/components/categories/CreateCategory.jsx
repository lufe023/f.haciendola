import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getConfig from '../utils/getConfig';
import Spinner from '../utils/Spinner';
import Swal from 'sweetalert2';
import axios from 'axios';
import getAllCategories from './getCategories';

const CreateCategory = () => {
    const dispatch = useDispatch()
    const [newCategory, setNewCategory] = useState({
        name: "",
        description: "",
        parent:''
    })
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCategory({ ...newCategory, [name]: value });
    };

    let categories = useSelector(state => state.dashboardSlice.categories)

    const handleSubmit = (e) => {
        e.preventDefault();
    
    
        if(newCategory.name)
        {
            setLoading(true)
        axios.post(`${import.meta.env.VITE_API_SERVER}/api/v1/categories/`, newCategory,getConfig())
            .then(response => {
                setLoading(false)
                getAllCategories(dispatch)
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
                    title: "Categoría creada!",
                });
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
    <>
    {
    loading?
    <div style={{display:"flex", justifyContent:"center"}}>
        <Spinner/>
        </div>
        :
    <div className="card">
    <div className="card-header pb-0 p-3">
      <h6 className="mb-0">Crear Categoría</h6>
    </div>
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
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="title" className="form-control-label">Categoría Padre</label>
                    <div className="input-group">
                    <select onChange={handleInputChange} name='parent' className="form-select" aria-label="Default select example">
                    <option selected value={0} >Sin padre</option>
                    {categories?.map(category => (
                        
                        <option  key={category.id} value={category.id}>{category.name}</option>
                    ))}
                    </select>
                    </div>
                        
                    </div>
                    <div className="col-md-12">
                    <div className="input-group">
                    <button type="submit" className={`btn btn-sm ms-auto mt-3 ${newCategory.name?'btn-dark':'btn-secondary'}`}>Crear</button>
                    </div>
                    </div>
                </div>
    </form>
    </div>
</div>

}
</>
)
}

export default CreateCategory