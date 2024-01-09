import { useContext } from 'react';
import { Outlet, Navigate} from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';


export default ({redirectPath = '/auth/login', children}) => {
    const {user} = useContext(UserContext)
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />;
};

