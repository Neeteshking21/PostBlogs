import { Fragment, useRef } from 'react';
import {
    Link, useNavigate
} from "react-router-dom";

import "./Login.css"
import axios from "../../helpers/axios"
import { setToken, removeToken } from './helpers/Helper';

function Logout() {
    /* Function For Handle Submit */
    const navigate = useNavigate();
    const loggedOut = (e) => {
        e.preventDefault();
        let response = removeToken();
        if(response.status == "success"){
            navigate('/login');
        }
    }
    return (
        <div className="logout-btn">
            <div className="navBar">
                <button type="button" onClick={loggedOut}>LOG OUT</button>
            </div>
        </div>
    );
}

export default Logout;