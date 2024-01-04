import React from "react";
//import{FcLike} from "react-icons"
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses= props.likedCourses;
    let setlikedCourses = props.setlikedCourses;
    function clickHandler(){
      if(likedCourses.includes(course.id))
      {
        //pehle se like
        setlikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
        toast.warning('liked remove')
      }
      else{
        //pehle se like nhi h
        if(likedCourses.length==0){
            setlikedCourses([course.id])
        }
        else
        {
            setlikedCourses((prev)=>[...prev,course.id]);
        }
        toast.success('liked successfully....')
      }
    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded overflow-hidden">
            <div className="relative ">
                <img src={course.image.url}></img>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler} className="">
                        {
                            !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.7rem"/>):(<FcLike fontSize="1.75rem"></FcLike>)
                        }
                    
                    </button>
                </div>
            </div>
            <div>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                {
                    course.description.length>100?(course.description.substr(0,100))+"....":(course.description)
                    }
                </p>
            </div>
        </div>
    )
}
export default Card