import React,{ Component } from "react";

class notfoundadmin extends React.Component{
    constructor(){
        super()
        this.redirector = this.redirector.bind(this)
    }
    redirector(){
        this.props.history.push('/')
    }
    render(){
        return(
    <div>
        <h1>Invalid Details</h1>
        <button onClick={this.redirector} class="btn btn-outline-warning">Try Logging-In Again</button>
    </div>
        )
}
}
export default notfoundadmin
