import React from "react";

function NoInternet () {
    return (
        <div className="flex justify-center items-center h-full ">
            <h1 className="text-white font-bold text-xl text-center">No <span className="text-blue-700 animate-pulse ">Internet</span> Access!</h1>
        </div>
    )
}

export default NoInternet;