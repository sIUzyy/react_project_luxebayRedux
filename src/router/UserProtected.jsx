import { Navigate } from "react-router-dom";
import { useAuth } from "../contextAPI/authContext";



export const UserProtected = ({children}) => {

   const { currentUser } = useAuth()
   
   if(!currentUser) {
    return (<Navigate to='/' />)
   }
   return children
}

export default UserProtected
