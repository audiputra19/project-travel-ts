import { jwtDecode } from "jwt-decode";
import moment from "moment";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { JsxElement } from "typescript";

interface TokenPayload {
    exp: number;
}
export const ProtectedRoute: FC<{children: JSX.Element}> = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if(token){
            const decodeToken = jwtDecode<TokenPayload>(token); 
            const currentTime = moment().unix();

            if(decodeToken.exp < currentTime){
                localStorage.removeItem('token');
                navigate('/login');
            }
        } else {
            navigate('/login')
        }
    })

    return children
}