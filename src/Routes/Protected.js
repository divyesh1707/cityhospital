import { Outlet, Navigate } from 'react-router-dom';


function Protected(props) {
  const localdata = localStorage.getItem('LoginData');

  return (
    localdata ? <Outlet /> : <Navigate to={'/Auth'} replace />
  );
}

export default Protected;