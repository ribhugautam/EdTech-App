import React from "react";

function Spinner () {
    return (
        
        <div className="flex flex-col justify-center items-center animate-pulse h-full">
            <div className=" animate-spin w-8 h-8 rounded-full border-4 border-r-blue-900 border-white/50"/>
        </div>
    )
}
export default Spinner;