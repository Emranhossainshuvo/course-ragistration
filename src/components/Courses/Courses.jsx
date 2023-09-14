import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data=> setCourses(data))
    }, [])

    return (
        <div className="container mx-auto">            
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>  
    );
};

export default Courses;