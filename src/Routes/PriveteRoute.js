import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../AuthContext/AuthContext';

const PriveteRoute = ({children}) => {
    
    const {user, Loading} = useContext(UserContext);
    const location = useLocation();
    if(Loading){
        return <p>loading...</p>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location }} replace></Navigate>
};

export default PriveteRoute;