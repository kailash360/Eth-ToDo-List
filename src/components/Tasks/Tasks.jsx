import React from 'react'
import Card from './Card/Card'

function Tasks() {

    const Tasks = [1,2,3]

    return (
        <div className="container" style={{display: "flex", flexDirection: "row", flexWrap:"wrap"}}>
            {Tasks.map(task=><Card/>)}            
        </div>
    )
}

export default Tasks
