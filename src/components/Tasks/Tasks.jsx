import React from 'react'
import Card from './Card/Card'

function Tasks({tasks,methods,account}) {

    const toggleCompleted = async (taskId) => {
        const result = await methods.toggleCompleted(parseInt(taskId)).send({from:account})
        console.log(result)
    }

    return (
        <div className="container" style={{display: "flex", flexDirection: "row", flexWrap:"wrap"}}>
            {tasks.map(task=><Card task={task} toggleCompleted={toggleCompleted}/>)}            
        </div>
    )
}

export default Tasks
