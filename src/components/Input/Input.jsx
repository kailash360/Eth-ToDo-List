import React from 'react'

function Input() {
    return (
        <form>
            <div className="mb-3 col-6 my-4" style={{margin:"auto"}}>
                <label for="exampleInputEmail1" className="form-label h3">Write your task below</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <button type="button" className="btn btn-primary">Add Task</button>
        </form>
    )
}

export default Input
