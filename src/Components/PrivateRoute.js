import {  Navigate } from "react-router-dom";

import { useAuth } from "../Helper/AuthContext";



export default function PrivateRoute({ children }) {

  const { currentUser } = useAuth();



  return currentUser ? children : <Navigate to="/" />;

}
