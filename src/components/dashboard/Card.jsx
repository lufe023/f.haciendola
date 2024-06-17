import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import './carousel.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import getConfig from '../utils/getConfig';


const Card = ({ product, cartId }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(false)

  // Función para convertir los precios y poner las comas a los miles y los flotantes
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

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

    fetchImages();
  }, [product.Title]);

  const addToCart = (productId, cartId = null)=> {
let product = {productId, quantity: 1} 
      setLoading(true)
      // Submit updated product data
      axios.post(`${import.meta.env.VITE_API_SERVER}/api/v1/cart/${cartId}/products`, product,getConfig())
          .then(response => {

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
                  title: "Producto Agregao al carrito!",
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
                  title: `Hubo un error al agregar producto`,
              });
          });
  } 
  return (
    <div className="col-12 col-sm-6 col-md-4 d-flex flex-column" style={{ marginBottom: '15px' }}>
      <div className="card">
        <div className="card-header">{product.categoryDetails.name}</div>
        <div className="card-body pt-0">
          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            {imageUrls.length > 0 ? (
              <Carousel showThumbs={true}  useKeyboardArrows autoPlay stopOnHover emulateTouch swipeable>
                {imageUrls.map((url, index) => (
                  <div key={index}>
                    <img src={url} alt={`${product.Title} ${index + 1}`} style={{ height: '200px' }} />
                  </div>
                ))}
              </Carousel>
            ) : (
              <p>No images available</p>
            )}
          </div>
          <div className="row">
            <div>
              <h2 className="lead"><b>{product.Title}</b></h2>
              <p><strong>Características:</strong></p>
              <ul>
                <li>Para hacer pegaduras, contornos, decorar y pintar sobre papel, papel cartón y cartulina.</li>
                <li>Posee un brillo intenso con glitter.</li>
                <li>Lavable (no mancha las ropas).</li>
              </ul>
              <ul className="ml-4 mb-0 fa-ul text-muted">
                <li className="small"><span className="fa-li"><i className="fas fa-dollar-sign" /></span> Precio: {formatPrice(product.ComparePrice)}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="text-right" style={{ display: 'flex', alignItems: 'center', alignContent:"center", flexWrap:"wrap"}}>
          <div className="col-6">
            <a className="btn bg-teal" alt="Agregar a Favorito">
              <i className="fas fa-heart" />&nbsp;&nbsp; Agregar Favoritos
            </a>
            </div>
            <div className="col-6">
            <a className="btn bg-gradient-primary" onClick={()=>addToCart(product.id, cartId)}> <i className="fas fa-cart-plus" />&nbsp;&nbsp; Agregar al Carrito</a>
            </div>
            

            <div className="col-6">
            <Link to={`/products/edit/${product.id}`} className="btn bg-gradient-dark">
              <i className="fas fa-edit" />&nbsp;&nbsp; Editar
            </Link>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Card;
