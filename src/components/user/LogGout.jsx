import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setUserData } from '../../store/slices/user.slice';

const LogGout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Limpiar el almacenamiento local y el estado de usuario al montar el componente
    localStorage.clear();
    dispatch(setUserData(''));
  }, [dispatch]);

  // Redirigir a la página principal usando Navigate
  return <Navigate to="/" replace />;
};

export default LogGout;
