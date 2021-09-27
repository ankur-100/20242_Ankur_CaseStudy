import axios from "axios";
import React,{ Component } from "react";

class modifytask extends React.Component{
    constructor(props){
        super(props);
        this.onNotes = this.onNotes.bind(this)
        this.onBookmark = this.onBookmark.bind(this)
        this.onpriority = this.onpriority.bind(this)
        this.backcrt = this.backcrt.bind(this)
        this.state={
        taskid1: 0,
        taskid2: 0,
        taskid3:0,
        notes: '',
        bookmark: '',
        priority: '',
        tsk:[],
        tid: 0

    };
}
    onNotes(e){
        e.preventDefault()
        const noteobj={
            taskid: this.state.taskid1,
            notes: this.state.notes
        }
        let a ="http://localhost:8080/task/"
        let b = this.state.taskid1
        var c = a.concat(b)
        axios.put(c, noteobj)
        .then(res => {
            console.log(c)
            alert('Notes added to task')
        })
        axios.get(c)
        .then(res => {
            console.log(res)
        })
    }

    onBookmark(e){
        e.preventDefault();
        const bookmarkobj={
            taskid: this.state.taskid2,
            isbookmarked: this.state.bookmark
        }
        let a ="http://localhost:8080/task/"
        let b = this.state.taskid2
        var c = a.concat(b)
        axios.put(c, bookmarkobj)
        .then(res => {
            console.log(c)
            alert('Task Bookmarked')
        })
        axios.get(c)
        .then(res =>{
            console.log(res)
        })

    }

    onpriority(e){
        e.preventDefault()
        const priorityobj={
            taskid: this.state.taskid3,
            priority: this.state.priority
        }
        let a ="http://localhost:8080/task/"
        let b = this.state.taskid3
        var c = a.concat(b)
        axios.put(c, priorityobj)
        .then(res => {
            console.log(c)
            alert('Priority changed')
        })
        axios.get(c)
        .then(res => {
            console.log(res)
        })

    }

    onchangetaskid1(evt){
        this.setState({
            taskid1: evt.target.value
        })
    }

    onchangetaskid2(evt){
        this.setState({
            taskid2: evt.target.value
        })
    }

    onchangetaskid3(evt){
        this.setState({
            taskid3: evt.target.value
        })
    }

    onchangenote(evt){
        this.setState({
            notes: evt.target.value
        })
    }

    onchangebookmark(evt){
        this.setState({
            bookmark: evt.target.value
        })
    }

    onchangepriority(evt){
        this.setState({
            priority: evt.target.value
        })
    }
    backcrt(){
        this.props.history.push('/createtask')
    }

  
    render(){
        return(
        <div>
            <p align="left"><button class="btn-secondary"onClick={this.backcrt}>Go Back</button></p>
            <h1 align="left">Modify Tasks:</h1>
            <h2>Add Notes:</h2>
            <form>
                <div class="form-group">
                <table><tr>
                <td>Enter Task ID:<input type="number" class ="form-control" placeholder="Task ID" value={this.state.taskid1} onChange={evt => this.onchangetaskid1(evt)}/>
                </td></tr><tr><td>
                Enter notes: <input type="text" class ="form-control" placeholder="Add notes here" value={this.state.notes} onChange={evt => this.onchangenote(evt)}/>
                </td></tr></table>
                <button class="btn btn-outline-info" type="submit" onClick={this.onNotes}>Add Notes</button>
                </div>
            </form>
            <br />
            <h2>Bookmark Task:</h2>
            <form>
            <div class="form-group">
                <table><tr>
                <td>Enter Task ID:<input class ="form-control" type="number" value={this.state.taskid2} placeholder="Task ID" onChange={evt => this.onchangetaskid2(evt)}/>
                </td></tr><tr><td>
                Add Bookmark: <input  class ="form-control" type="number" value={this.state.bookmark} placeholder="Bookmarks" onChange={evt => this.onchangebookmark(evt)}/>
                </td></tr></table>
                <button type="submit" class="btn btn-outline-info" onClick={this.onBookmark}>Create a Bookmark</button>
                </div>
            </form>
            <h2>Update Priority</h2>
            <form>
            <div class="form-group">
            <table><tr>
                <td>Enter Task ID:<input type="number" class ="form-control" placeholder="Task ID" value={this.state.taskid3} onChange={evt => this.onchangetaskid3(evt)}/>
                </td></tr><tr><td>
                Set Priority:<select value={this.state.priority} class ="form-control" onChange={evt => this.onchangepriority(evt)}><option>High</option><option>Medium</option><option>Low</option></select>
                </td></tr></table>
                <button type="submit" class="btn btn-outline-info" onClick={this.onpriority}>Change Priority</button>
                </div>
            </form>
        </div>
        )
    }
}

export default modifytask
