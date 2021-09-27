import axios from "axios";
import React,{ Component } from "react";

class setstatus extends React.Component{
   
    constructor(){
        super()
        this.onstatus = this.onstatus.bind(this)
        this.ulog = this.ulog.bind(this)
        this.state={
            taskid: 0,
            stat: ''
        }
  }

  onstatus(e){
      e.preventDefault()
      var flag=0;
      if(this.state.stat == "")
      {
          flag=1;
          alert('Select Task Status')
      }
      const updateobj ={
          taskid: this.state.taskid,
          status: this.state.stat
      }
      if(flag==0){
      let a ="http://localhost:8080/task/"
        let b = this.state.taskid
        var c = a.concat(b)
      axios.put(c, updateobj)
      .then(res => {
          console.log(c)
          alert('Status updated Succesfully');
      })
      .catch(error => {
        alert('error')
      });
    }
  }

  onchangetid(evt){
      this.setState({
          taskid: evt.target.value
      })
  }

  onchangestatus(evt){
      this.setState({
          stat: evt.target.value
      })
  }

  ulog(){
      this.props.history.push('/userlanding')
  }

  render(){
      return(
          <div>
              <p align="left"><button class="btn btn-secondary" onClick={this.ulog}>Go Back</button></p>
              <form>
                  <div class="form-group">
                      <table><tr><td>
                  Enter Task ID: <input type="text" class="form-control" value={this.state.taskid} onChange={evt => this.onchangetid(evt)}></input>
                  </td></tr><tr><td>
                  Select Status: <select  class="form-control" value={this.state.stat} onChange={evt => this.onchangestatus(evt)}><option></option><option>Active</option><option>Completed</option><option>Cancelled</option><option>Closed</option></select>
                  </td></tr></table>
                  <button type="button"  class="btn btn-outline-dark" onClick={this.onstatus}>Update Status</button>
                  </div>
              </form>
          </div>
      )
  }
}

export default setstatus