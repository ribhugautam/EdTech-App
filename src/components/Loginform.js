import React from "react";
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {toast} from "react-hot-toast";

function Loginform ({setIsLoggedIn}) {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function changeHandler (event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            }
        })
    }

    function submitHandler (event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Successful");
        navigate('/Dashboard');
    }

    return(
        <form onSubmit={submitHandler} className="flex  flex-col gap-4">

            <label htmlFor="email">
            <span>Email Address<sup>*</sup>
            </span>
            <br/> 
            

            <input 
            required 
            type="text"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email" 
            className="w-full bg-slate-600 text-white p-1 px-2 rounded-md"
            />
            </label>

            <label className="relative">

            <span>
            Password<sup>*</sup>
            </span><br/>
            
            <input 
            required 
            type= "password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            className="w-full bg-slate-600 text-white p-1 px-2 rounded-md" 
            />
            
            <Link to='#' className="absolute right-0 text-xs -bottom-5 text-blue-500">Forgot Password</Link>
            </label>

            <button className="bg-green-500 hover:bg-green-500/80 transition-all duration-200 w-full font-medium mt-8 p-1 px-2 rounded-md">
                Sign In
            </button>
        </form>
    )
}

export default Loginform;