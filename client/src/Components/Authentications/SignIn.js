import { useRef } from 'react';
import {
    Link, useNavigate
} from "react-router-dom";

import axios from "../../helpers/axios"
import { setToken } from './Helper';

function Signin() {
    /* Define Refs */
    const _usernameInput = useRef("")
    const _passwordInput = useRef("")
    const navigate = useNavigate();

    /* Global Variables */

    function formvalid() {
        let vaildpass = _passwordInput.current.value
        if (vaildpass.length <= 8 || vaildpass.length >= 20) {
            document.getElementById("vaild-pass").innerHTML = "Minimum 8 characters";
            return false;
        } else {
            document.getElementById("vaild-pass").innerHTML = "";
        }
    }

    function show() {
        let password = _passwordInput.current.value
        if (password.type === "password") {
            password.type = "text";
            document.getElementById("showimg").src =
                "https://static.thenounproject.com/png/777494-200.png";
        } else {
            password.type = "password";
            document.getElementById("showimg").src =
                "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
        }
    }

    /* Function For Handle Submit */
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = _usernameInput.current.value;
        const password = _passwordInput.current.value;
        axios({
            method: 'POST',
            url: "api/signin",
            data: {
                username: username,
                password: password,
                type: "manager"
            }
        })
            .then((response) => {
                if (response.data.status === "success"){
                    // setToken(response);
                    console.log("Account Has Been Created, Please Login!")

                    return navigate('/login');
                }else{
                    console.log(response.data.message)
                    alert(response.data.message)
                }
            })
            .catch(error => {
                console.log(error)
                alert("failed to Signin")
            })
    }
    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form " >
                    <h2>CREATE NEW ACCOUNT</h2>
                    <input type="text" required placeholder="Username" ref={_usernameInput} autoComplete="off" />
                    <input onInput={formvalid} type="password" required placeholder="Password" ref={_passwordInput} autoComplete="off" />
                    <img src="https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"
                        onClick={show} id="showimg" />
                    <span id="vaild-pass"></span>
                    <button type="button" onClick={handleSubmit}>SIGN IN</button>
                    <p className="message"><Link to="/login">Already Have an Account?</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signin;