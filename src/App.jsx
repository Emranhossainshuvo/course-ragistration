
import './App.css'
import Course from './components/Course/Course'
import Courses from './components/Courses/Courses'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-12'>Course registration</h1>
      <Courses></Courses>
      <Course></Course>
    </>
  )
}

export default App
