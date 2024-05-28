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
      </Route>
      </Routes>
    </>
  )
}

export default App
