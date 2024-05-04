import { Navigate } from "react-router-dom";
import { useUserType } from "../../hooks/userContext";


const AdminRoute = ({ children, roles }) => {
    const { getUser } = useUserType()
    const role = getUser()
    const allowedRoles = Array.isArray(roles) ? roles : []
    console.log(Array.isArray(roles));

    // const r = roles.includes(role)
    //console.log(r);
    const check = allowedRoles.includes(role)
    console.log(check);
    console.log(children);

    const content = check ? children : <Navigate to="/auth/login" />
    return content
};

export default AdminRoute;