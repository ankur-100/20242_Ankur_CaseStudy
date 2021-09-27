import axios from 'axios';
import React,{Component} from 'react';

class Login extends React.Component{

    constructor () {
        super()
        this.state = {
            login:[],
            uid: '',
            password:''
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/login")
        .then(response=>{this.setState({login:response.data})})
        
    }
    
    onSubmit=() => {
        var flag=0;
        if(this.state.password.length < 6)
        {
            flag=1
            alert('password must be 6 characters');
        }
        if(this.state.uid.length == 0)
        {
            flag=1
        alert('User ID field cannot be empty.')
        }
        this.state.login.map(
            logi =>{
                if(flag==0){
                if(this.state.uid == logi.userid  && this.state.password == logi.password){
                    console.log('Login Succesful')
                this.props.history.push('/userlanding')
                }}
                else if(this.state.uid != logi.userid ){
                    console.log('User Not Found')
                    console.log(logi.userid)
                    this.props.history.push('/notfound')
                }
            
            })
    }
    updateuidValue(evt) {
        this.setState({
          uid: evt.target.value
        });
      }
    updatepassValue(evt) {
        this.setState({
          password: evt.target.value
        });
    } 

    render() {
        return (
            <div class="form-group">
            <form align="center" onSubmit={this.onSubmit}>
                <b>Login Here:</b>
                <br></br>
                <table align="center" border="2px" cellPadding="5px" cellSpacing="5px">
                    <tr>
                        <td>Enter Login ID: </td><td> <input placeholder="Enter Login ID here" class="form-control" type="number" name="lid" value={this.state.uid} onChange={evt => this.updateuidValue(evt)}></input></td></tr>
                    <tr><td>Enter Password: </td><td><input placeholder="Enter Password here" class="form-control" type="password" name="password" value={this.state.password} onChange={evt => this.updatepassValue(evt)}></input></td></tr>            
                </table>
                <button type="submit" class="btn btn-sm btn-primary" onClick={this.handleSubmit}><i><b>Login</b></i></button>
            </form>
            </div>
        )
    }
}

export default Login

