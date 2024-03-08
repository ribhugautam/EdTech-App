import React from "react";
import frameImage from "../assets/frame.png";
import Signupform from "./Signupform";
import Loginform from "./Loginform";

function Template ({title, desc1, desc2, image, formtype, setIsLoggedIn}) {
    return (
        <div className="flex text-white justify-evenly items-center max-w-[1160px] w-11/12 mx-auto py-12 gap-x-12 gap-y-0">

            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-2xl max-w-[24rem]">{title}</h1>
                <p>
                    <span className="text-slate-400">{desc1}</span>
                    <br/>
                    <span className=" text-blue-500 italic">{desc2}</span>
                </p>

                {formtype === "signup" ? (<Signupform setIsLoggedIn = {setIsLoggedIn}/>) : (<Loginform setIsLoggedIn = {setIsLoggedIn}/>)}

                <div className="flex justify-center items-center text-sm gap-1">
                    <div className="h-[1px] w-full bg-slate-400"/>
                    <span>OR</span>
                    <div className="h-[1px] w-full bg-slate-400"/>
                </div>

                <button className="bg-white/20  font-medium p-1 px-2 rounded-md">
                    <span>Sign in with Google</span>
                </button>

            </div>

            <div className=" hidden md:flex lg:flex relative max-w-[450px]">
                <img src={frameImage} alt="Pattern" width={450} loading="lazy" className="absolute aspect-square rounded-full z-10 left-2 -bottom-2"/>
                <img src={image} alt="user" width={450} loading="lazy" className="relative aspect-square z-20 rounded-full "/>
            </div>

        </div>
    )
}

export default Template;