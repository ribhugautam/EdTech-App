import React from "react";
import {useState} from 'react';
import { toast } from "react-hot-toast";
import { useNavigate} from 'react-router-dom';

function Signupform({setIsLoggedIn}) {

    const navigate = useNavigate();

    const[formData,setFormData] = useState({
        fname: "",
        lname:"",
        email:"",
        createpassword:"",
        confirmpassword:"",
    })

    const[accountType,setAccountType] = useState("student");

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
        if(formData.createpassword !== formData.confirmpassword){
            toast.error("Password don't match!");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        
        const accountData = {
            ...formData
        };

        console.log("Printing data");
        console.log(accountData);
        navigate("/Dashboard");

    }

    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-row bg-slate-600 p-1 px-[5.5rem] gap-x-2 rounded-full justify-center items-center max-w-[8rem]">
                <button onClick={() => setAccountType('student')} className={`${accountType === 'student' ? "bg-black text-white" : "bg-transparent text-gray-400"} py-1 px-3 rounded-full transition-all duration-200 text-sm `}>
                    Student
                </button>
                <button onClick={() => setAccountType('instructor')} className={`${accountType === 'instructor' ? "bg-black text-white" : "bg-transparent text-gray-400"} py-1 px-3 rounded-full transition-all duration-200  text-sm`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className="flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                <label>
                    <span>
                        First Name<sup>*</sup>
                    </span>
                    <br/>

                    <input
                    required
                    type="text"
                    name="fname"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.fname}
                    className=" w-full bg-slate-600 text-white p-1 px-2 rounded-md"
                    />
                </label>

                <label>
                    <span>
                        Last Name<sup>*</sup>
                    </span>
                    <br/>

                    <input
                    required
                    type="text"
                    name="lname"
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value={formData.lname}
                    className="w-full bg-slate-600 text-white p-1 px-2 rounded-md"
                    />
                </label>                
                </div>

                <label>
                    <span>
                        Email Address<sup>*</sup>
                    </span>
                    <br/>

                    <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email ID"
                    value={formData.email}
                    className=" w-full bg-slate-600 text-white p-1 px-2 rounded-md"
                    />
                </label>

                <div className="flex flex-row gap-2" >

                <label>
                    <span>
                        Create Password<sup>*</sup>
                    </span>
                    <br/>

                    <input
                    required
                    type="password"
                    name="createpassword"
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    value={formData.createpassword}
                    className=" w-full bg-slate-600 text-white p-1 px-2 rounded-md"
                    />
                </label>

                <label>
                    <span>
                        Confirm Password<sup>*</sup>
                    </span>
                    <br/>

                    <input
                    required
                    type="password"
                    name="confirmpassword"
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    value={formData.confirmpassword}
                    className=" w-full bg-slate-600 text-white p-1 px-2 rounded-md"
                    />
                </label>
                
                </div>

                <button className="bg-green-500 hover:bg-green-500/80 transition-all duration-200 w-full font-medium mt-8 p-1 px-2 rounded-md">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default Signupform;