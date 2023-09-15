import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddToBookmark}) => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data=> setCourses(data))
    }, [])

    return (
        <div className="container mx-auto mb-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-5">            
            {
                courses.map(course => <Course key={course.id} handleAddToBookmark={handleAddToBookmark} course={course}></Course>)
            }
        </div>  
    );
};

Courses.propTypes = {
    handleAddToBookmark: PropTypes.func
}

export default Courses;