/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Private = ( {children} ) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user?.email){
        return children
   
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
        
};

export default Private;