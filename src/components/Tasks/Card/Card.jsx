import React from 'react'

function Card({task,toggleCompleted}) {
    return (
    <div className="card mx-3 my-3" style={{width: "18rem"}}>
        <div className="card-body px-1">
            <p className="card-text">{task.content}</p>
            <button 
                className={task.completed?"btn btn-danger":"btn btn-primary"} 
                style={{fontSize: "0.9em"}} 
                onClick={()=>toggleCompleted(task.taskId)}
            >
                {task.completed?"Completed":"Mark as Completed"}
            </button>
        </div>
    </div>
    )
}

export default Card
