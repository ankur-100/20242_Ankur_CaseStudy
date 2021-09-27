import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Login from './Components/Login';
import axios from 'axios';
import img21 from './Images/img21.png'
import bgfront from './Images/bgfront.png';

class App extends React.Component{
  constructor () {
    super()
    this.state = {
        login:[],
        uid: '',
        password:'',
        role:''
    }
}

componentDidMount(){
    axios.get("http://localhost:8080/login")
    .then(response=>{this.setState({login:response.data})})
    
}

onSubmit=(e) => {
  e.preventDefault()
  var flag =0;
  if(this.state.role =="Others")
  {
    flag=1;
    alert('Redirecting to User Login Page')
    this.props.history.push('/login')
  }
  if(this.state.password.length < 6)
  {
    flag=1
            alert('password must be 6 characters');
  }
       else if(this.state.uid.length == 0){
         flag=1
        alert('User ID field cannot be empty.')
       }
       
    this.state.login.map(
        logi =>{
          if(flag==0){
            if(this.state.uid == logi.userid  && this.state.password == logi.password){
                console.log('Login Succesful')
            this.props.history.push('/Createtask')
            }}
            else if(this.state.uid != logi.userid){
            this.props.history.push('/notfoundadmin')
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
f1(){
  
}
updaterole(evt){
  this.setState({
    role: evt.target.value
  })
}
render() {
    return (
        <div style={{backgroundColor:"#7gs86h"}}>
          <header><img src={img21} /> </header>
          <h1><b><i>Welcome to Task Tracking Portal</i></b></h1>
        <form align="center" onSubmit={this.onSubmit} oh>
            <b>Login Here:</b>
            <br></br>
            <table align="center" border="2px" cellPadding="5px" cellSpacing="5px">
                <tr>
                    <td>Enter Login ID: </td><td> <input class="form-control" placeholder="Enter Login ID here" type="number" name="lid" value={this.state.uid} onChange={evt => this.updateuidValue(evt)}></input></td></tr>
                <tr><td>Enter Password: </td><td><input class="form-control" placeholder="Enter Password here" type="password" name="password" value={this.state.password} onChange={evt => this.updatepassValue(evt)}></input></td></tr>
               <p>     Role: <select value={this.state.role} onChange={evt => this.updaterole(evt)}>
                    <option>Admin</option>
                    <option>Others</option></select></p>
                    
            </table>
            <button type="submit" class="btn btn-sm btn-primary" ><i><b>Login</b></i></button>
        </form>
        </div>
    )
}
}

export default App;
