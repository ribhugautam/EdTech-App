import React from "react";

function Filter (props) {

    const filterData = props.filterData;
    const catogory = props.catogory;
    const setCategory = props.setCategory;

    function clickHandler (event) {
        setCategory(event.target.innerText);
    }

    return (
        <div className="flex flex-wrap justify-center items-center p-4 gap-8">
            {
                filterData.map(( name ) => {
                    return <button catogory = {catogory} onClick={clickHandler} className={`bg-white/20 backdrop-blur-sm text-white p-1 px-2 rounded-md hover:scale-105 transition-all duration-200 text-sm font-medium hover:bg-white/40 ${catogory === name.title ? "bg-white/40" : "bg-white/20"}`} key = {name.id}>
                            {name.title}
                           </button>
                })
            }
        </div>
    )
}

export default Filter;