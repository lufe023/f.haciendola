import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/dashboard/Home'
import ProtectedRoutes from './components/utils/ProtectedRoutes'
import Login from './components/user/Login'
import LogGout from './components/user/LogGout'
import SignUp from './components/user/SignUp'
import Error404 from './components/utils/Error404'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import getUserbyId from './components/user/getUserbyId'
import Products from './components/dashboard/Products'
import SeeProducts from './components/products/SeeProducts'
import EditProduct from './components/products/EditProduct'
import FindProducts from './components/products/FindProducts'
import SearchPage from './components/products/SearchPage'
import CategoriesPage from './components/categories/CategoriesPage'



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserbyId(dispatch);

  }, [])
  

  return (
    <>    
    <Routes>
      <Route path='*' element={<Error404/>}/>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<LogGout/>}/>
      <Route path='/signup' element={<SignUp/>}/>

      <Route element={<ProtectedRoutes/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path="/search" element={<SearchPage />} />
        <Route path='/products/:id' element={<SeeProducts/>}/>
        <Route path="/products/edit/:id" element={<EditProduct/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/categories/:id" element={<CategoriesPage/>} />
      </Route>
      </Routes>
    </>
  )
}

export default App
