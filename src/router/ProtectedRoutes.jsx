import { Navigate } from "react-router-dom";
import { useAuth } from "../contextAPI/authContext";

export const ProtectedRoutes = ({children}) => {
    const { currentUser } = useAuth()
    return !currentUser ? children : <Navigate to='/luxebay' replace />


}

export default ProtectedRoutes