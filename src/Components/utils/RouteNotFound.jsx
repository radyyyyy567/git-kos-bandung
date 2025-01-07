import React from 'react'
import { useNavigate } from "react-router-dom";


const RouteNotFound = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        // This will trigger a redirect to the specified path after 3 seconds
        navigate("/not-found");
      }, 1);
    
    
    
  return (
    <div></div>
  )
}

export default RouteNotFound