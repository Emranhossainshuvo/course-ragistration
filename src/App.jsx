import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
// import Course from './components/Course/Course'
import Courses from './components/Courses/Courses'


function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [remaining, setRemaining] = useState(20);
  const [totalCost, setTotalCost] = useState(0)

  const handleAddToBookmark = course => {
    let count = course.credit;
    const isExist = bookmarks.find(item => item.id == course.id);

    if (isExist) {
      return toast("Already added");
    } else {
      
      const newBookmarks = [...bookmarks, course];
      
      bookmarks.forEach((item) => {
        count = count + item.credit;
      }); 
      const totalRemaining = 20 - count; 
      
      if(count > 20){
        return toast("Not enough credit");
      }else{
        setTotalCost(count)
        // console.log(count)
        setRemaining(totalRemaining)
      }
      setBookmarks(newBookmarks);
      // console.log(count)
    }
    // console.log(course.credit)
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-12'>Course registration</h1>
      <div className='md:flex max-w-7xl mx-auto'>
        <Courses handleAddToBookmark={handleAddToBookmark}></Courses>
        <Bookmarks remaining={remaining} bookmarks={bookmarks} totalCost={totalCost}></Bookmarks>
      </div>
    </>
  )
}

export default App
