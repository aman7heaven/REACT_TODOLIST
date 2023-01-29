export const Task=(props)=>{
    return(
        <div className="task" style={{backgroundColor: props.color ?"green":"white"}}>

        <h1>{props.taskName}</h1>

        <button onClick={()=>props.complete(props.id)}>completed</button>

        <button onClick={()=>props.deleteTask(props.id)}>x</button>
        
        </div>
    )
}