import React,{useState} from 'react'

function Input({methods,account}) {

    const [newTask,setNewTask] = useState("")
    const addTask = async()=>{
        const result = await methods.addTask(newTask).send({from: account})
        setNewTask("")
        console.log(result)
    }

    return (
        <form>
            <div className="mb-3 col-6 my-4" style={{margin:"auto"}}>
                <label for="exampleInputEmail1" className="form-label h3">Write your task below</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setNewTask(e.target.value)}} value={newTask} />
            </div>
            <button type="button" className="btn btn-primary" onClick={addTask} >Add Task</button>
        </form>
    )
}

export default Input
