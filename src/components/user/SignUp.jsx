import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../utils/Spinner'
import axios from 'axios'
import getConfig from '../utils/getConfig'
import Swal from 'sweetalert2'

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: "",
  })
  const navigate = useNavigate();
  const passwordsMatch = form.password !== "" && form.repassword !== "" && form.password === form.repassword;

  const signup = (e) => {
  
    e.preventDefault();
    if(form.email && passwordsMatch){
    setIsLoading(true)
    
    const URL = `${import.meta.env.VITE_API_SERVER}/api/v1/auth/register`;
    axios.post(URL, form, getConfig())
      .then(response => {
        setIsLoading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
         // allowOutsideClick: true, // Permitir cerrar al hacer clic fuera de la notificación
          showCloseButton: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
      });
      
      Toast.fire({
          icon: 'success',
          title: `Usuario Creado con exito`
      });
      // Redirige a la ruta almacenada en el estado local o lo envia al inicio
      navigate(localStorage.getItem('redirectPath')=="/login"?'/':localStorage.getItem('redirectPath') || '/');
      // Limpia la ruta almacenada en el estado local
      localStorage.removeItem('redirectPath');
      })
      .catch(error => {
        // Handle error
        console.log(error)
        setIsLoading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
      });
      Toast.fire({
          icon: 'error',
          title: `Ha habido un error`
      });
      });
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });
    Toast.fire({
        icon: 'error',
        title: `debes completar al menos la contraseña y el correo`
    });
    }
  }



  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
          <div className="container">
            <Link to={'/'} className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white">
              Ecommerce
            </Link>
            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon mt-2">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link me-2 active" href="../pages/sign-up.html">
                    <i className="fas fa-user-circle opacity-6 me-1" />
                    Crear cuenta
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={'/login'} className="nav-link me-2">
                    <i className="fas fa-key opacity-6 me-1" />
                    Iniciar Sesion
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */}
        <main className="main-content mt-0">
          <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
            style={{ backgroundImage: 'url("https://images.livspace-cdn.com/w:1440/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2024-1704560007-SGQ6F/existing-real-home-assets-1704643706-yeqEk/new-folder-1704645244-RgitI/2-contemporary-1704645269-NaNVu.jpg")', backgroundPosition: 'center', backgroundColor: "#23454" }}>
            <span className="mask bg-gradient-dark opacity-6" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 text-center mx-auto">
                  <h1 className="text-white mb-2 mt-5">Bienvenido!</h1>
                  <p className="text-lead text-white">Estas a un paso de crear una cuenta en nuestra tienda.</p>
                </div>
              </div>
            </div>
          </div>
          {
            isLoading ? <div style={{ display: "flex", justifyContent: "center" }}>
              <Spinner />
              <h5>Registrando....</h5>
            </div>
              :
              <div className="container">
                <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
                  <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                    <div className="card z-index-0">
                      <div className="card-header text-center pt-4">
                        <h5>Registrate</h5>
                      </div>
                      <div className="card-body">
                        <form role="form" onSubmit={signup}>
                          <div className="mb-3">
                            <input type="text" onChange={(e) => setForm({ ...form, firstName: e.target.value })} value={form.firstName} name='firstName' className="form-control" placeholder="Nombre" aria-label="Name" />
                          </div>
                          <div className="mb-3">
                            <input type="text" className="form-control" name='lastName' onChange={(e) => setForm({ ...form, lastName: e.target.value })} value={form.lastName} placeholder="Apellido" aria-label="lastName" />
                          </div>
                          <div className="mb-3">
                            <input type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} name='email' className="form-control" placeholder="Correo" aria-label="Email" />
                          </div>
                          <div className="mb-3">
                            <input type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} value={form.password} name='password' className="form-control" placeholder="Contraseña" aria-label="Password" />
                          </div>
                          <div className="mb-3">
                            <p>
                          {form.repassword !== "" && !passwordsMatch ? "Contraseñas no coinciden" : ""}
                            <input type="password" onChange={(e) => setForm({ ...form, repassword: e.target.value })}
                              value={form.repassword} name='repassword'
                              className={`form-control ${form.repassword !== "" && !passwordsMatch ? 'bg-danger' : ''}`}
                              placeholder={form.repassword !== "" && !passwordsMatch ? "Contraseñas no coinciden" : "Repita la contraseña"} aria-label="Password" />
                            </p>
                          </div>
                          <div className="form-check form-check-info text-start">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                              Acepto los terminos <a href="#" className="text-dark font-weight-bolder">Terminos y Condiciones</a>
                            </label>
                          </div>
                          <div className="text-center">
                            <button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2">Crear</button>
                          </div>
                          <p className="text-sm mt-3 mb-0">Ya tienes una cuenta? <Link to={'/login'} className="text-dark font-weight-bolder">Iniciar Sesión</Link></p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
        </main>
        <footer className="footer py-5">
          <div className="container">
            <div className="row">
              <div className="col-8 mx-auto text-center mt-1">
                <p className="mb-0 text-secondary">
                  Copyright © Soft by Creative Tim. Edited By Luis Fernando
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default SignUp
