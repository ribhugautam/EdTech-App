import React from "react";
import {useState} from "react";
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import {toast} from 'react-hot-toast';

function Card (props) {

    const course = props.course;
    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;

    const[enrolled,setEnrolled] = useState(false);
    const [checkMore, setCheckMore] = useState(false);
    const description = !checkMore ? course.description.slice(0,100):course.description;

    function readMore (){
        setCheckMore(!checkMore);
    }


    function likeHandler (){
        if(likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.error("Like Removed");
            return;
        }
        else{
            if(likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Like Added");
        }
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
        <div className="bg-white/20 backdrop-blur-sm rounded-md max-w-[350px] p-4 flex flex-col  text-white gap-4">
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt} className="rounded-md"/>
                <div className="absolute -bottom-4 right-4">
                    <button className="bg-slate-500 rounded-full p-2" onClick={likeHandler}>
                        {likedCourses.includes(course.id) ? <FcLike className="size-6 hover:scale-110 transition-all duration-200"/>:<FcLikePlaceholder className="size-6 hover:scale-110 transition-all duration-200"/>}
                    </button>
                </div>
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

export default Card;