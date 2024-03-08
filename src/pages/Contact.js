import React, { useState } from "react";
import toast from 'react-hot-toast';

function Contact () {

    const[formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev, 
            [e.target.name]: e.target.value
        }))
    }

    function submitHandler(e) {
        e.preventDefault();
        toast.success("Message sent successfully");
        setFormData({
            name:"",
            email:"",
            phone:"",
            message:"",
        });
    }

    return(
        <div className="h-full text-white flex flex-col justify-center items-center p-8">
            <div className="flex flex-col  items-center w-full gap-8">
                <h1 className="text-2xl font-semibold rounded-md border-4 py-1 px-8 border-white text-center" >Contact</h1>
                <p>Let me know how we can help you.</p>
                <form onSubmit={submitHandler} className="flex py-8 px-8 rounded-md flex-col gap-8 w-11/12 max-w-[40rem] text-sm bg-white/20 items-center">
                    <input className=" w-full border-l-[3px] bg-transparent pla rounded-bl-md border-b-[3px] outline-none border-white px-2 py-1" required type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange}/>
                    <input className=" w-full border-l-[3px] bg-transparent rounded-bl-md border-b-[3px] outline-none border-white px-2 py-1" required type="text" name="email" value={formData.email} placeholder="Email" onChange={handleChange}/>
                    <input className=" w-full border-l-[3px] bg-transparent rounded-bl-md border-b-[3px] outline-none border-white px-2 py-1" required type="text" name="phone" value={formData.phone} placeholder="Phone Number" onChange={handleChange}/>
                    <textarea className=" w-full h-[8rem] border-l-[3px] bg-transparent rounded-bl-md border-b-[3px] outline-none border-white px-2 py-1" required name="message" value={formData.message} placeholder="Your Message" onChange={handleChange}/>
                    <div>
                    <button className="bg-green-500 hover:bg-green-500/80 rounded-md transition-all duration-200 mt-4 font-medium px-4 py-2"><span>Submit</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;