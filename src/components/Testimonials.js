import React, { useState } from "react";
import Box from "./Box";

function Testimonials ({data}) {

    let [count, setCount] = useState(0);
    const length = data.length;

    return (
        <div className="flex flex-col gap-8 py-12">
            <div className='flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-semibold rounded-md border-4 py-1 px-8 border-white text-center'>Our Testimonials</h2>
            </div>

            <Box data = {data[count]} count = {count} setCount = {setCount} length = {length}/>

        </div>
    )
}

export default Testimonials;