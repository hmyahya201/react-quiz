import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const PublicRoute = ({children}) => {
    const {currentUser} = useAuth()
    return ( !currentUser ? children : <Navigate to="/"/> 
    );
};

export default PublicRoute;