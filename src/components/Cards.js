import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
    let courses = props.courses;
    let category=props.category
    const [likedCourses,setlikedCourses] = useState([])
    function getCourses(){
        if (category==="All"){
        let allCorses =[]
        Object.values(courses).forEach(array=>{
            array.forEach(courseData => {
                allCorses.push(courseData)
            })
        })
        return allCorses;
    }
    else{
        //shoe specifi data only
        return courses[category];
    }
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">{
            getCourses().map((course)=>(
                <Card key={course.id} course={course} likedCourses={likedCourses} setlikedCourses={setlikedCourses}/>
            ))
        }
        </div>
    )
    
}

export default Cards;