import './App.css';
import { useState } from 'react';
import {Task} from "./Task"


function App() {

  const [todoList,setTodoList]=useState([]);

  const [newTask,setNewTask]=useState("");

  const handleChange=(event)=>{
      setNewTask(event.target.value);
  };

  const addTask=()=>{
      const task={
        id: todoList.length===0 ? 1: todoList[todoList.length-1].id+1,
        taskName: newTask,
        color:false,
      }
      setTodoList([...todoList,task]);
  }

  const deleteTask=(id)=>{
     const newTodoList=todoList.filter((task)=>{
       if(task.id===id){
          return false;
        
       }else{
        return true;
       }
     })
      setTodoList(newTodoList);
  }

  const complete=(id)=>{
         setTodoList(
            todoList.map((task)=>{
             if(task.id===id){
               return {...task,color:true};
             }else{
              return task;
             }
           })
      ) ; 
  };
  
return (
  <div className='App'>

   <div className='addTask'>
    
   <input onChange={handleChange}/>

   <button onClick={addTask}>Add Task</button>

   </div>
   <div className='list'>
    {todoList.map((task)=>{
       return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} complete={complete} color={task.color}/>;
    })}
   </div>

  </div>
);

}


export default App; 