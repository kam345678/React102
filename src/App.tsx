
import './App.css'
// import CounterDec from './component/CounterDec'
// import CounterInc from './component/CounterInc'
// import CounterScore from './component/CounterScore'
import TodoForm from './component/todoForm'
import ShowTodoList from './component/showTodoList'
import CourseForm from './component/CourseForm'
import CourseList from './component/CourseList'
import CourseDrop from './component/CourseDrop'
function App() {

  return (
    <>
      <h1>Assignment </h1>
      <div>
        <h2>1.ปรับระบบงาน TodoList ให้ใช้งาน State Management: Zustand โดยแยก Component</h2>
        <TodoForm/>
        <ShowTodoList/>
        
        {/* <CounterScore/>
        <CounterInc/>
        <CounterDec /> */}
      </div>
      <hr />
      <div>
        <h2>2.ระบบการถอนรายวิชา</h2>
        <CourseForm/>
        <CourseList/>
        <CourseDrop/>
      </div>
    </>
  )
}

export default App
