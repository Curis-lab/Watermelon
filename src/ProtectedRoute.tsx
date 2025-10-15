import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from './context/SessionContext';

function ProtectedRoute() {
    const {isLoggedIn, loading} = useSession();
    if(loading) <div>...loading</div>;
    return isLoggedIn ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoute
