import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import Spinner from "./components/Spinner"
import { apiUrl, filterData } from "./data";
//import { Toast } from "react-toastify/dist/components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const [courses, setcourses] = useState(null);
  const [loading, setloading] = useState(true)
  const[category,setCategory] =useState(filterData[0].title)
  async function fetchData() {
    setloading(true)
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setcourses(output.data)
    }
    catch (error) {
      toast.error("network not working")
    }
    setloading(false)
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col ">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div >
          <Filter filterData={filterData}
          category={category} 
          setCategory={setCategory}></Filter>
        </div>
        <div className="w-11/12 max-w-{1200px} mx-auto flex flex-wrap justify-center items-center min-h-[50vh">
          {
            loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>
    </div>
  )
};

export default App;
