import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('location in side', location.pathname)  

    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'>Login</Navigate>
};

export default PrivateRoute;