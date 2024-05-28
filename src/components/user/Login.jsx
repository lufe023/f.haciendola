import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';
import Spinner from '../utils/Spinner'
import getUserbyId from './getUserbyId';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
      email: '',
      password: ''
  });

const [loading, setLoading]=useState(false)

  const submit = (e) => {
    setLoading(true)

    e.preventDefault();
    const URL = `${import.meta.env.VITE_API_SERVER}/api/v1/auth/login`;
    axios.post(URL, form)
        .then(res => {
          setLoading(false)
            localStorage.setItem('token', res.data.token);
            setForm({
              email:'',
              password:''
            })
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
                title: `Session Iniciada`
            });
            getUserbyId(dispatch)
            // Redirige a la ruta almacenada en el estado local o lo envia al inicio
            navigate(localStorage.getItem('redirectPath')=="/login"?'/':localStorage.getItem('redirectPath') || '/');
            // Limpia la ruta almacenada en el estado local
            localStorage.removeItem('redirectPath');
        })
        .catch(err => {
            setLoading(false)
            console.log(err);
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
                title: `${err.response.data.message}`
            });
        });
};

  return (
    <>
  <div>
  <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
    <div className="container">
    <Link to={'/'} className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white" href="../pages/dashboard.html">
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
          <Link to={'/signup'} className="nav-link me-2 " href="../pages/sign-up.html">
              <i className="fas fa-user-circle opacity-6  me-1" />
              Crear cuenta
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/login'} className="nav-link me-2 active" >
              <i className="fas fa-key opacity-6  me-1" />
              Iniciar Session
            </Link>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
  {/* End Navbar */}
  <main className="main-content  mt-0">
    <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
     style={{backgroundImage: 'url("https://images.livspace-cdn.com/w:1440/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2024-1704560007-SGQ6F/wallpaper-1704971338-5UOez/wl15-1708500763-ihgZL.jpg")',
      backgroundPosition: 'center'}}>
      <span className="mask bg-gradient-dark opacity-6" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 text-center mx-auto">
            <h1 className="text-white mb-2 mt-5">Bienvenido!</h1>
            <p className="text-lead text-white">Pon tus credenciales para acceder al sistema.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div className="card z-index-0">
            <div className="card-header text-center pt-4">
              <h5>Iniciar Sesión</h5>
            </div>
          
            <div className="card-body">
              <form role="form" onSubmit={submit}>
                <div className="mb-3">
                  <input type="email"
                  className="form-control"
                  placeholder="Correo"
                  aria-label="Email"
                  autoComplete='true'
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="mb-3">
                  <input type="password"
                  className="form-control"
                  placeholder="Contraseña" 
                  aria-label="Password"
                  onChange={(e) => setForm({ ...form, password: e.target.value })} />
                </div>
                <div className="text-center">
                  {
                    loading?
                    <div style={{display:"flex",justifyContent:"center"}}><Spinner/></div>
                    :<button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2">Iniciar</button>
                
                  }
                  </div>
                
                <p className="text-sm mt-3 mb-0">Aun no tienes una cuenta? <Link to={'/signup'} className="text-dark font-weight-bolder">Crear una</Link></p>
                <p className="text-sm mt-3 mb-0">Olvidé mi contraseña <Link to={'/'} className="text-dark font-weight-bolder">Recuperar mi contraseña</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  {/* -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- */}
  <footer className="footer py-5">
    <div className="container">
      <div className="row">
        {/* <div className="col-lg-8 mb-4 mx-auto text-center">
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            Company
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            About Us
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            Team
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            Products
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            Blog
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
            Pricing
          </a>
        </div> */}
        {/* <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
            <span className="text-lg fab fa-dribbble" />
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
            <span className="text-lg fab fa-twitter" />
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
            <span className="text-lg fab fa-instagram" />
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
            <span className="text-lg fab fa-pinterest" />
          </a>
          <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
            <span className="text-lg fab fa-github" />
          </a>
        </div> */}
      </div>
      <div className="row">
        <div className="col-8 mx-auto text-center mt-1">
          <p className="mb-0 text-secondary">
            Copyright ©  Soft by Creative Tim. Edited By Luis Fernando
          </p>
        </div>
      </div>
    </div>
  </footer>
</div>

    </>
  )
}

export default Login