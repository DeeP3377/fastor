import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"
var qs = require('qs');
const LoginOtpVerify = (props) => {
    const [otp, setOtp] = useState("");
    const phone = props.phone;
    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        var data = qs.stringify({
            'phone': phone,
            'otp': otp,
            'dial_code': '+91',
            '': ''
        });
        var config = {
            method: 'post',
            url: 'https://staging.fastor.in/v1/pwa/user/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                // console.log("reponse", response.data.data.token);
                localStorage.setItem("token",response?.data?.data?.token);
                if(response.data.data)
                {  
                    navigate(`/`)
                }
                else{
                    alert('invalid data');
                    window.location.reload(true);
                    navigate(`/login`);
                }
            })
            .catch(function (error) {
                console.log(error);
                navigate(`/login`);
            });
      

    }
    return (
        <>
            <form method="POST" onSubmit={submitForm}>
                <input type='number' className="form-control phone-input" placeholder="Enter OTP..." value={otp} onChange={(e) => setOtp(e.target.value)} required></input>
                <input className="Next-btn" type="submit" value="Verify"></input>
            </form>
        </>
    )
}
export default LoginOtpVerify;