import React from "react";
import reviews from '../assets/data';
import Testimonials from '../components/Testimonials';

function About () {
    return(
        <div className="flex flex-col h-full items-center max-w-[1180px] mx-auto w-11/12 text-white">
            <div className="flex flex-col items-center gap-8" >
                <h1 className="text-2xl font-semibold rounded-md border-4 py-1 px-8 border-white text-center">About Us</h1>

                <div className="flex flex-wrap justify-center items-center gap-4" >
                    <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 flex flex-wrap max-w-[381.6px] rounded-md gap-4 p-12">

                    <p >
                    <span className="text-green-500 font-medium" >Tech Buddies</span> is an online learning platform that offers high-quality courses and programs for learners of all ages and backgrounds. Whether you want to advance your career, pursue your passion, or simply learn something new, Tech Buddies has something for you.
                    </p>
                   
                </div>
                <div className="bg-white/20 flex flex-wrap rounded-md max-w-[381.6px] gap-4 p-12">
        
                    <p>
                    <span className="text-green-500 font-medium " >Our Mission</span> is to make education accessible, affordable, and enjoyable for everyone. We believe that learning should be fun, engaging, and personalized. That is why we partner with the best instructors and institutions from around the world to deliver interactive and immersive learning experiences.
                    </p>
                   
                </div>

                <div className="bg-white/20 flex flex-wrap rounded-md max-w-[381.6px] gap-4 p-12">
                    
                    <p>
                    <span className="text-green-500 font-medium " >Our Vision</span> is to create a global community of lifelong learners who share their knowledge, skills, and perspectives with each other. We believe that learning is not only a personal journey, but also a social one. That’s why we foster a culture of collaboration, feedback, and support among our learners and instructors.  
                    </p>
                    
                </div>
                </div>

                <div className="bg-white/20 flex flex-col rounded-md max-w-[381.6px] md:max-w-full lg:max-w-full xl:max-w-full gap-4 p-12">
                 
                    <p>
                    <span className="text-green-500 font-medium " >Our Values</span> are excellence, diversity, and innovation. We strive to provide the highest quality of education for our learners, while respecting and celebrating their differences and uniqueness. We also embrace change and creativity, and constantly seek to improve our platform and our courses.  
                    </p>
                    <span className="italic text-center text-blue-500">
                    Join us today and discover the joy of learning with Tech Buddies! 
                    </span>
                </div>
                </div>
            </div>
            <Testimonials data = {reviews}/>
        </div>
    )
}

export default About;