import React from "react";
import {useState} from "react";
import {toast} from 'react-hot-toast';

function FreeCard (props) {

    const course = props.course;

    const [checkMore, setCheckMore] = useState(false);
    const[enrolled,setEnrolled] = useState(false);
    const description = !checkMore ? course.description.slice(0,50):course.description;

    function readMore (){
        setCheckMore(!checkMore);
    }

    function enrollHandler (){
        toast.success("Enrolled successfully");
        setEnrolled(true);
    }

    function notenrollHandler (){
        toast.error("Not Enrolled");
        setEnrolled(false);
    }


    return (
        <div className="bg-white/20 backdrop-blur-sm  rounded-md max-w-[350px] p-4 flex flex-col  text-white gap-4">
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt} className="rounded-md"/>
            </div>
            <h2 className="font-bold text-md">{course.title}</h2>
            <p className="font-">{description}
            <span onClick={readMore} className="text-blue-400 hover:text-blue-500 font-medium transition-all duration-200 text-sm cursor-pointer">
                {
                    !checkMore ? `...Show More` : ` Show Less`
                }
            </span>
            </p>
            {
                !enrolled &&
                <button onClick={enrollHandler} className="bg-green-500 hover:bg-green-500/80 transition-all duration-200 p-2 rounded-md font-bold ">Enroll</button>
            }
            {
                enrolled &&
                <button onClick={notenrollHandler} className="bg-slate-500 p-2 rounded-md font-bold ">Enrolled</button>
            }
        </div>
    )
}


export default FreeCard;