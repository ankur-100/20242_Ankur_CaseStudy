import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import Createtask from './createtask';

const Showtask =() => {
    const [task, setTasks]= useState([])
    useEffect(()=>{
        loadtask();
    },[])

    const loadtask =async () => {
        const res = await axios.get('http://localhost:8080/task');
            console.log(res)
            setTasks(res.data)
    }
    const history = useHistory();
        const onSubmit = (data, e) =>{
        history.push({
            pathname: "/login"
        });
    }

    return(
        <div align="container">
            <button onClick={onSubmit} align="left" class="btn btn-secondary">Log-Out</button>
                <table class="table-border-shadow" border="2px" class="table" width="100%">
                    <thead class="thead-dark"><th>Task Name</th>
                <th width="15%">Task ID</th>
                <th width="25%">Task Description</th>
                <th width="15%">Task Status</th>
                <th width="15%">Task Assigned to</th>
                <th width="20%">Priority</th></thead><tbody>
                {
                    task.map(tsk=>(
                        <tr>
                        <td width="15%"><li key={tsk.taskid}>{tsk.name}</li></td>
                        <td width="10%">{tsk.taskid}</td>
                        <td width="25%">{tsk.description}</td>
                        <td width="15%">{tsk.status}</td>
                        <td width="15%">{tsk.ownerid}</td>
                        <td width="20%">{tsk.priority}</td>
                        </tr>
                    ))
                }
                </tbody>
                </table>
            
        </div>
    )
}

export default Showtask