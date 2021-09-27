import React,{ Component } from "react";

class userlanding extends React.Component{
    constructor(){
        super()
        this.onshow = this.onshow.bind(this)
        this.onset = this.onset.bind(this)
        this.onout = this.onout.bind(this)
    }

    onshow(){
        this.props.history.push('/showtask')
    }

    onset(){
        this.props.history.push('/setstatus')
    }
    onout(){
        this.props.history.push('/login')
    }
    render(){
        return(
            <div>
                <button align="right" class="btn btn-secondary" onClick={this.onout}>Log-Out</button>
                <h1 align="left"><i><b>Welcome!</b></i> </h1>
                <h3>Select one to continue:</h3>
                <br />
                <button class="btn btn-primary" onClick={this.onshow}>Show tasks</button>
                <br /><br/>
                <button class="btn btn-success" onClick={this.onset}>Set Status</button>
            </div>
        )
    }
}

export default userlanding