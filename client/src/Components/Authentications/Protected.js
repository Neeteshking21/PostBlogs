import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { getToken } from "./Helper";
import { useSelector } from 'react-redux'

function Protected (props) {
    const TOKEN = useSelector((state) => state.auth.TOKEN)
    const Component = props.Component;
    const navigate = useNavigate();

    
    useEffect(() => {
        if(TOKEN === ""){
            navigate("/login")
        }
    },[])

    return(
        <React.Fragment>
            <Component />
        </React.Fragment>
    )
}

export default Protected;