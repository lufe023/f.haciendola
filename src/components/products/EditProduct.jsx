import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import getConfig from '../utils/getConfig';
import Header from '../dashboard/Header';
import Aside from '../dashboard/Aside';
import { useSelector } from 'react-redux';
import Spinner from '../utils/Spinner';
import Swal from 'sweetalert2';
import Footer from '../dashboard/Footer';
import { Carousel } from 'react-responsive-carousel';
import CategoriesCard from '../categories/CategoriesCard'
import CreateCategory from '../categories/CreateCategory';

const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [modifiedFields, setModifiedFields] = useState({});
    const [loading, setLoading] = useState(false);
    let menu = useSelector(state => state.pageSlice.menu);
    const [imageUrls, setImageUrls] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState()

// Obtener imágenes de Pixabay
useEffect(() => {
    const fetchImages = async () => {
       
      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: { q: product.Title, key: import.meta.env.VITE_API_KEY_PIXABAY, per_page: 3 },
        });
        if (response.data.hits.length > 0) {
          const urls = response.data.hits.map(hit => hit.webformatURL);
          setImageUrls(urls);
        } else {
          setImageUrls([]); // URL de una imagen por defecto o vacío si no se encuentran imágenes
        }
      } catch (error) {
        console.error('Error fetching images from Pixabay:', error);
      }
    };
    if(product){
        fetchImages();
}

  }, [product]);

    useEffect(() => {
        // Fetch product data by id
        axios.get(`${import.meta.env.VITE_API_SERVER}/api/v1/products/${id}`, getConfig())
            .then(response => {
                setProduct(response.data);
                setSelectedCategory(response.data.category)
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
        setModifiedFields({ ...modifiedFields, [name]: true });
    };

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        // Submit updated product data
        axios.patch(`${import.meta.env.VITE_API_SERVER}/api/v1/products/${id}`, product,getConfig())
            .then(response => {
                setModifiedFields({});
                setLoading(false)
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
                    title: "Producto modificado con exito!",
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
                    title: `Hubo un error al actualizar`,
                });
            });
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className={`g-sidenav-show bg-gray-100 ${menu ? 'g-sidenav-pinned' : ''}`}>
        <Header />
        <Aside />
        <main className="main-content position-relative border-radius-lg">
        <div className="container-fluid py-4">
        <div className="row">
            <div className="col-md-8 mt-3">
            <div className="card">
                <div className="card-header pb-0">
                <div className="d-flex align-items-center">
                    <p className="mb-0">Editar Producto</p>
                </div>
                </div>

                <div className="card-body">
                <p className="text-uppercase text-sm">Información del Producto</p>
                {loading?<Spinner/>:
                <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="title" className="form-control-label">Nombre</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-body">
                                            {modifiedFields.Title && <i className="fas fa-keyboard text-danger text-success" aria-hidden="true" />}
                                        </span>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="Title" 
                                            value={product.Title || ''} 
                                            onChange={handleInputChange}
                                            onFocus={(e) => e.target.classList.add('focused')}
                                            onBlur={(e) => e.target.classList.remove('focused')} 
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Repeat similar blocks for other fields */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="description" className="form-control-label">Descripción</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-body">
                                            {modifiedFields.Description && <i className="fas fa-keyboard text-danger" aria-hidden="true" />}
                                        </span>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="Description" 
                                            value={product.Description || ''} 
                                            onChange={handleInputChange}
                                            onFocus={(e) => e.target.classList.add('focused')}
                                            onBlur={(e) => e.target.classList.remove('focused')} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="SKU" className="form-control-label">SKU</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-body">
                                            {modifiedFields.SKU && <i className="fas fa-keyboard text-danger" aria-hidden="true" />}
                                        </span>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="SKU" 
                                            value={product.SKU || ''} 
                                            onChange={handleInputChange}
                                            onFocus={(e) => e.target.classList.add('focused')}
                                            onBlur={(e) => e.target.classList.remove('focused')} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="grams" className="form-control-label">Gramos</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-body">
                                            {modifiedFields.Grams && <i className="fas fa-keyboard text-danger" aria-hidden="true" />}
                                        </span>
                                        <input 
                                            className="form-control" 
                                            type="number" 
                                            name="Grams" 
                                            value={product.Grams || ''} 
                                            onChange={handleInputChange}
                                            onFocus={(e) => e.target.classList.add('focused')}
                                            onBlur={(e) => e.target.classList.remove('focused')} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="stock" className="form-control-label">Stock</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-body">
                                            {modifiedFields.Stock && <i className="fas fa-keyboard text-danger" aria-hidden="true" />}
                                        </span>
                                        <input 
                                            className="form-control" 
                                            type="number" 
                                            name="Stock" 
                                            value={product.Stock || ''} 
                                            onChange={handleInputChange}
                                            onFocus={(e) => e.target.classList.add('focused')}
                                            onBlur={(e) => e.target.classList.remove('focused')} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="price" className="form-control-label">Precio</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-body">
                                            {modifiedFields.Price && <i className="fas fa-keyboard text-danger" aria-hidden="true" />}
                                        </span>
                                        <input 
                                            className="form-control" 
                                            type="number" 
                                            name="Price" 
                                            value={product.Price || ''} 
                                            onChange={handleInputChange}
                                            onFocus={(e) => e.target.classList.add('focused')}
                                            onBlur={(e) => e.target.classList.remove('focused')} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="comparePrice" className="form-control-label">Precio de Comparación</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-body">
                                            {modifiedFields.ComparePrice && <i className="fas fa-keyboard text-danger" aria-hidden="true" />}
                                        </span>
                                        <input 
                                            className="form-control" 
                                            type="number" 
                                            name="ComparePrice" 
                                            value={product.ComparePrice || ''} 
                                            onChange={handleInputChange}
                                            onFocus={(e) => e.target.classList.add('focused')}
                                            onBlur={(e) => e.target.classList.remove('focused')} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="barcode" className="form-control-label">Código de Barras</label>
                                    <div className="input-group">
                                        <span className="input-group-text text-body">
                                            {modifiedFields.Barcode && <i className="fas fa-keyboard text-danger" aria-hidden="true" />}
                                        </span>
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="Barcode" 
                                            value={product.Barcode || ''} 
                                            onChange={handleInputChange}
                                            onFocus={(e) => e.target.classList.add('focused')}
                                            onBlur={(e) => e.target.classList.remove('focused')} 
                                        />
                                    </div>
                                </div>
                            </div>
                            

                            <button type="submit" className="btn btn-primary btn-sm ms-auto">Guardar</button>
                        </div>
                        
                    </form>
                    
                    }
                </div>
                
            </div>
            
            </div>

            <div className="col-md-4 gap-4 d-grid mt-3">
            <div className="card card-profile">
                {imageUrls.length > 0 ? (
                    <Carousel showThumbs={true}  useKeyboardArrows autoPlay stopOnHover emulateTouch swipeable> 
                        {imageUrls.map((url, index) => (
                        <div key={index}>
                            <img src={url}  className="card-img-top" alt={`${product.Title} ${index + 1}`} style={{ height: '200px' }} />
                        </div>
                        ))}
                    </Carousel>
                    ) : (
                    <p>No images available</p>
                    )}
                <div className="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
                <div className="d-flex justify-content-between">
                    <a className="btn btn-sm btn-info mb-0 d-none d-lg-block">Editar Imagen</a>
                
                    <a className="btn btn-sm btn-danger float-right mb-0 d-none d-lg-block">Borrar</a>
                    
                </div>
                </div>
                <div className="card-body pt-0"></div>

            
            </div>
            
            
            </div>
        </div>
        <div className="row ">
        <div className="col-md-8 mt-3">
                <CategoriesCard 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                product={product}
                setProduct={setProduct}
            />
            </div>
            <div className="col-md-4 mt-3">
            <CreateCategory/>
            </div>
        </div>
        <Footer/>
        </div>
        </main>
        </div>
    );
};

export default EditProduct;
