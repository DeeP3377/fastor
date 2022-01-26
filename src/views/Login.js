import React ,{useState , useRef} from "react";
import "./Login.css";
import LoginOtpVerify from "./LoginOtpVerify";

const Login = ()=>{
    const phoneref = useRef();
    const [otpform,showOtp] = useState(true);
    const [phone , setPhone] = useState("")
    const submitForm = (e)=>{
        e.preventDefault();
        showOtp(false);

    }
    return(
        <>
        <div className="login-page">
            <h1 className="main-heading"><br/>Login</h1>
             
            <div className="login-div">
                {otpform ?
                <form method="POST" onSubmit={submitForm}>
                    <input type='number' className="form-control phone-input" placeholder="Mobile Number" value={phone} ref={phoneref} onChange={(e) => setPhone(e.target.value)} required></input>
                    <input className="Next-btn" type="submit" value="Next"></input>
                </form>
                :
                <LoginOtpVerify   phone ={phoneref.current.value} />
                }
            </div>
        </div>
        </>
    )
}
export default Login;