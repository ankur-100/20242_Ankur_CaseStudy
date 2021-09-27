import axios from "axios";
import React, { useState,useEffect } from "react";
import { useHistory } from "react-router";
import reportWebVitals from "../../reportWebVitals";
import Datatable from "./dtable";

export default function Filterstatus(){
    const [data, setData] = useState([])
    const [q,setq] = useState("")

    useEffect(()=>{
        axios.get('http://localhost:8080/task')
        .then(res=>{
            console.log(res)
            setData(res.data)
        })
    },[])

    function searc(rows) {
        return rows.filter(row => row.status.toLowerCase().indexOf(q) > -1)
    }
    const history = useHistory();
        const onSubmit = (data, e) =>{
        history.push({
            pathname: "/createtask"
        });
    }

    return(
        <div>
            <button type="button" class="btn btn-secondary" align="left" onClick={onSubmit}>Go Back</button>
            <div>
                Filter By Priority:
                <select value={q} onChange={(e) => setq(e.target.value)}>
                    <option>active</option>
                    <option>completed</option>
                    <option>closed</option>
                    <option>cancelled</option>
                </select>
            </div>
            <Datatable data={searc(data)}></Datatable>
        </div>
    )
}