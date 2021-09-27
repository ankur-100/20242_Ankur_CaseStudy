import axios from 'axios';
import React,{Component } from 'react';

class Createtask extends React.Component{
    constructor(){
        super()
        this.onSubmit = this.onSubmit.bind(this)
        this.listtask = this.listtask.bind(this)
        this.changetask = this.changetask.bind(this)
        this.settask = this.settask.bind(this)
        this.ondelete = this.ondelete.bind(this)
        this.onsearch = this.onsearch.bind(this)
        this.onfilter = this.onfilter.bind(this)
        this.onfilter2 = this.onfilter2.bind(this)
        this.onout = this.onout.bind(this)
        this.state={
            taskid: 0,
            taskid1: 0,
            taskid3: 0,
            taskname: '',
            description: '',
            priority: '',
            status: ''
        }
        
    }
    onSubmit(e){
        e.preventDefault()
        var flag=0;
        if(this.state.taskid ==0)
        {
            flag=1;
            alert('Task ID is Mandatory.')
        }
        else if(this.state.taskname.length < 6)
        {
            flag=1;
            alert('Taskname too short.')
        }
        else if(this.state.priority == "")
        {
            flag=1;
            alert('Set Priority');
        }
        if(flag==0){
        const taskobj ={
            taskid: this.state.taskid,
            name: this.state.taskname,
            description: this.state.description,
            priority: this.state.priority
        }
        axios.post('http://localhost:8080/task', taskobj)
        .then((res) => {
            console.log(res.data)
        })
        alert(this.state.taskname + ' Created Succesfully')
    }}

    ondelete(e){
        e.preventDefault()
        var flg=0;
        var ag=prompt("Confirm Deletion (Enter Yes)", "No");
        switch(ag){
            case "Yes":
                flg=1;
                break;
            default:
                flg=0;
        }
        let a ="http://localhost:8080/task/"
        let b = this.state.taskid1
        var c = a.concat(b)
        if(flg==1){
        axios.delete(c)
        .then(res => {
            console.log('Task Deleted')
            alert('Task Deleted')
            
        })
        .catch(error => {
            alert('Task ID not found')
          });}
        
    }

    onsearch(e){
        this.props.history.push('/search')
    }
    
    onchangetaskid(evt){
        this.setState({
        taskid: evt.target.value
        });
    }

    onchangetaskname(evt){
        this.setState({
        taskname: evt.target.value
        });
    }

    onchangedescription(evt){
        this.setState({
        description: evt.target.value
        });
    }

    onchangepriority(evt){
        this.setState({
        priority: evt.target.value
        });
    }

    onchangetaskid1(evt){
        this.setState({
            taskid1: evt.target.value
        })
    }

    listtask(){
        this.props.history.push('/showtask')
    }

    changetask(){
        this.props.history.push('/modifytask')
    }

    settask(){
        this.props.history.push('/assigntask')
    }

    onchangetaskid3(evt){
        this.setState({
            taskid3: evt.target.value
            });
    }

    onfilter(){
        this.props.history.push('/filter')
    }

    onfilter2(){
        this.props.history.push('/filterstatus')
    }

    onout(){
        this.props.history.push('/')
    }

    render(){
        return(
            <div class="container1" align="left">
                <br />
                <button class="btn btn-secondary" onClick={this.onout}>Log-Out</button>
                <h1 align="left"><i><u>Welcome!</u></i></h1>< br/>
                <form>
                <h2><u>Create a Task:</u></h2>
                    <table >
                        <tr>
                            <td>Enter Task ID: <input type="number" name="taskid" placeholder="Task ID" value={this.state.taskid} onChange={evt => this.onchangetaskid(evt)}/></td>
                            </tr><tr>
                            <td>Enter Task Name:<input type="text" placeholder="Task Name" value={this.state.taskname} onChange={evt => this.onchangetaskname(evt)}/></td>
                            </tr><tr>
                            <td>Enter Description:<textarea name="para" placeholder="Task Description" value={this.state.description} onChange={evt => this.onchangedescription(evt)}/></td>
                            </tr><tr><br />
                            <td>Select Priority:<select value={this.state.priority} onChange={evt => this.onchangepriority(evt)}><option></option><option>High</option><option>Medium</option><option>Low</option></select></td>
                            </tr><tr>
                            <td><button type="submit" class="btn btn-success" onClick={this.onSubmit}>Create Task</button></td>
                        </tr>
                    </table>
                </form>
                <br />
                <table cellSpacing="30px" cellPadding="30px">
                    <tr><td>
                <button type="button" class="btn btn-primary" onClick={this.listtask}>Show All Tasks</button>
                </td><td>
                <button type="button" class="btn btn-secondary" onClick={this.changetask}>Modify Tasks</button>
                </td><td>
                <button type="button" class="btn btn-dark" onClick={this.settask}>Assign Task</button>
                </td><td></td>
                    </tr></table>
                <h2>Delete Task:</h2>
                <form>
                    <table><tr><td>
                    Enter Task ID: <br/><input type="number" value={this.state.taskid1} onChange={evt => this.onchangetaskid1(evt)}></input>
                    </td></tr></table>
                    <button onClick={this.ondelete} class="btn btn-danger" >Delete Task</button>
                    
                </form>
                <br />
                <table cellSpacing="30px" cellPadding="30px">
                    <tr><td>
                <button type="button" class="btn btn-dark" onClick={this.onsearch}>Search BY Id</button>
                </td><td>
                <button type="button" class="btn btn-dark" onClick={this.onfilter}>Filter by Priority</button>
                </td><td>
                <button type="button" class="btn btn-dark" onClick={this.onfilter2}>Filter by Status</button>
                </td><td></td>
                    </tr></table>
            </div>
        )
    }
}
export default Createtask