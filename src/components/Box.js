import React from "react";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

function Box (props) {


    const data = props.data;
    let count = props.count;
    const setCount = props.setCount;
    const length = props.length;

    function next () {
        return count === length-1 ? setCount(0) : setCount(count+1);
    }

    function back () {
        return count === 0 ? setCount(length-1) : setCount(count-1);
    }

    function Surprise () {
        setCount(Math.floor(Math.random()*length));
    }

    return (
        <div className="relative bg-white/20 rounded-md p-12 flex flex-col gap-4 justify-center items-center shadow-lg">
            <div className="md:absolute lg:absolute -top-[3rem] left-12 z-[10] mx-auto">
                <img src={data.image} alt="userimage" className="aspect-square w-24 h-24 rounded-full z-[25]"/>
                <div className="bg-white/20 h-24 top-0 left-2 w-24 rounded-full hidden md:flex lg:flex absolute z-[-10]"/>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="font-bold text-xl">{data.name}</h2>
                <span className="text-sm text-slate-400 font-medium">{data.job}</span>
            </div>

            <FaQuoteLeft className="text-white/50 text-2xl"/>

            <div className="text-center">
                <p className="font-medium">{data.text}</p>
            </div>

            <FaQuoteRight className="text-white/50 text-2xl"/>

            <div className="flex justify-between items-center gap-4">
               <button onClick={back}><FiChevronLeft className="text-slate-500 text-4xl hover:scale-125 transition-all duration-200"/></button> 
               <button onClick={next}><FiChevronRight className="text-slate-500 text-4xl hover:scale-125 transition-all duration-200"/></button>
            </div>

            <div>
                <button onClick={Surprise} className="bg-green-500 hover:bg-green-500/80 transition-all duration-200 p-2 px-6 text-white text-sm font-semibold rounded-md">
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Box;