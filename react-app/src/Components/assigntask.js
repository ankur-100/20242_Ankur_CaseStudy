import axios from "axios";
import React,{ Component } from "react";
import emailjs from "emailjs-com";
import Showtask from "./showtask";
import notfound from "./notfound";

class Assigntask extends React.Component{
    constructor(){
        super()
        this.onassign = this.onassign.bind(this)
        this.back = this.back.bind(this)
        this.state={
            taskid: 0,
            userid: 0
        }
    }
    onassign(e){
        var flag=0;
        if(this.state.userid == 0 || this.state.taskid == 0)
        {
            flag=1;
            alert('TaskID and UserID are required fields.')
        }
        e.preventDefault()
        const assignobj={
            taskid: this.state.taskid,
            ownerid: this.state.userid
        }
        let a ="http://localhost:8080/task/"
        let q ="http://localhost:8080/users/"
        let r = this.state.userid
        var s = q.concat(r)
        let b = this.state.taskid
        var c = a.concat(b)
        var z = ""
        var l = ""
        if(flag==0){
        axios.put(c, assignobj)
        .then(res => {
            console.log(res.data.ownerid)
            console.log(c)
            alert('Task Assigned to user with ID: ' + this.state.userid)
        })
        .catch(error => {
            alert('error')
          });
        }
        axios.get(s)
        .then(result => {
            console.log(result.data.user)
            var templateParam ={
                from: result.data.email,
                name: result.data.userName
            }
            emailjs.send('service_c3u712c',
            'template_duu2n3b',
             templateParam,
             'user_O7HdKK6wUhIwdT5zvI7dA'
            ).then(rest => {
                console.log(rest)
            })
        })
        
    }

    onchangetid(evt){
        this.setState({
            taskid: evt.target.value
        })
    }

    onchangeuid(evt){
        this.setState({
            userid: evt.target.value
        })
    }
    back(){
        this.props.history.push('/createtask')
    }


    render(){
        return(
            <div>
                <p align="left"><button onClick={this.back} class="btn btn-secondary">Go Back</button></p>
                <h1>Assign Task to User</h1>
                <form class="frm1">
                    <div class="form-group">
                    <table><tr>
                    <td>Enter Task ID:<input type ="number" class="form-control" placeholder="Task ID" value={this.state.taskid} onChange={evt => this.onchangetid(evt)}></input>
                    </td></tr><tr><td>
                    Enter User ID:<input type ="number" class="form-control" placeholder="Assign task to User" value={this.state.userid} onChange={evt => this.onchangeuid(evt)}></input>
                    </td></tr></table>
                    </div>
                </form>
                <button class ="btn btn-outline-primary" type="submit" onClick={this.onassign}>Assign Task</button>
                <br/><br/>
                
            </div>
        )
    }
}

export default Assigntask