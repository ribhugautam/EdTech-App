import {React, useState} from "react";
import FreeCard from "../components/FreeCard";

function FreeCards (props) {

    const data = props.data;

    const[likedCourses, setLikedCourses] = useState([]);


    return (
        <div className="flex flex-col items-center pt-4 max-w-[1180px] mx-auto ">

            <h1 className="font-bold text-center text-xl">
                Checkout our <span className="font-extrabold text-green-500 ">Free</span> Courses
            </h1>

            <div className="flex flex-wrap justify-center items-start gap-16 py-8">
            
                {
                    data.length > 0 ? data.map( course => {
                        return <FreeCard key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} course = {course}/>
                    }) : null
                }
            </div>
        </div>
    )
}

export default FreeCards;