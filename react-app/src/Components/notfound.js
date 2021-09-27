import React,{ Component } from "react";

class notfound extends React.Component{
    constructor(){
        super()
        this.redirector = this.redirector.bind(this)
    }
    redirector(){
        this.props.history.push('/login')
    }
    render(){
        return(
    <div>
        <h1>Invalid Details</h1>
        <button onClick={this.redirector} class="btn btn-outline-warning">Try Login Again</button>
    </div>
        )
}
}
export default notfound
