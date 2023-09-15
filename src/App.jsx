
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
// import Course from './components/Course/Course'
import Courses from './components/Courses/Courses'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-12'>Course registration</h1>
      <div className='md:flex max-w-7xl mx-auto'>
      <Courses></Courses>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
