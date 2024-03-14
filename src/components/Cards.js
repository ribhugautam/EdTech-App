import {React, useState} from "react";
import Card from "./Card";

function Cards (props) {

    const data = props.data;
    const catogory = props.catogory;
    const[likedCourses, setLikedCourses] = useState([]);

    function getData(){
        if (catogory === 'All'){
            let allData = [];

            Object.values(data).forEach(array => {
                array.forEach( course => {
                    allData.push(course);
                })
            })
            return allData;
        }

        else {
            return data[catogory];
        }
    }

    return (
        <div className="flex flex-wrap justify-center items-start gap-16 max-w-[1180px] mx-auto py-4">
            {
                getData().map( (course, index) => {
                    return <Card key={index} likedCourses={likedCourses} setLikedCourses={setLikedCourses} course = {course}/>
                })
            }
        </div>
    )
}

export default Cards;