import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateOutlate = () => {
    const {currentUser} = useAuth();
    return  currentUser ? <Outlet/> : <Navigate to="/login"/>;
};

export default PrivateOutlate;