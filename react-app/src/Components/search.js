import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    var a;
    let text1 = React.createRef();
    const [task, setTasks]= useState([])

    const loadtask =() => {
        let y = `http://localhost:8080/task/`
        let z = text1.current.value
        var x = y.concat(z)
        axios.get(x)
        .then(res => {
            console.log(res);
            setTasks(res.data)
        })
        .catch(error => {
            alert('Task ID not found')
        })
            
    }

    let onOnClick =(e) => {
        a=text1.current.value
    }
    
    return(
        <div>
            <input type="text" ref={text1} onClick={onOnClick} />
                <button onClick={loadtask}>Find</button>
                {
                    <table className="table">
                    <thead>
                        <tr>
                            <th>TaskID:</th>
                            <th>Task Name:</th>
                            <th>Description </th>
                            <th>Priority </th>
                            <th>Status </th>
                            </tr></thead>
                            <tr><td>
            {task.taskid}
            <br/></td><td>
            {task.name}
            <br/></td><td>
            {task.description}
            <br /></td><td>
            {task.priority}
            <br /></td><td>
            {task.status}
            </td></tr></table>
                    
                }
                
        </div>
    )
}
export default Search