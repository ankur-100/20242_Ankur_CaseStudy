import { render } from "@testing-library/react";
import axios from "axios";
import React, { Component } from "react";

class Home extends React.Component {

    constructor(){
        super()
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            userid: 0,
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: '',
            role: '',
            contactno: 0,
            isactive: '',
            dob: new Date().getDate
        }
    }
    onchangeuserid(evt){
        this.setState({
            userid: evt.target.value
        });
    }

    onchangeusername(evt){
        this.setState({
            username: evt.target.value
        });
    }

    onchangepassword(evt){
        this.setState({
            password: evt.target.value
        });
    }
    onchangeemail(evt){
        this.setState({
            email: evt.target.value
        });
    }

    onchangefirstname(evt){
        this.setState({
            firstname: evt.target.value
        });
    }

    onchangelastname(evt){
        this.setState({
            lastname: evt.target.value
        });
    }

    onchangecontactno(evt){
        this.setState({
            contactno: evt.target.value
        });
    }

    onchangerole(evt){
        this.setState({
            role: evt.target.value
        });
    }

    onchangeisactive(evt){
        this.setState({
            isactive: evt.target.value
        });
    }

    onchangedob(evt){
        this.setState({
            dob: evt.target.value
        });
    }

    
    onSubmit(e){
        e.preventDefault()
        var flag=0;
        var x = new Date().getDate
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(this.state.password.length<6)
        {
            flag=1
            alert('Password must be atleast 6 characters')
        }
        else if(this.state.username.length ==0)
        {
            flag=1
            alert('Username cannot be Empty.')

        }
        else if(this.state.userid==0)
        {
            flag=1
            alert('User ID is a required field.')
        }
        /*else if(this.state.dob > x)
        {
            flag=1
            alert('Invalid D.O.B')
        }*/
        else if(this.state.email.length ==0 || !pattern.test(this.state.email))
        {
            flag=1;
            alert('Please enter valid email address')
        }
        /*else if(this.state.contactno.toString.length < 6)
        {
            flag=1
            alert('Enter Valid Phone No.')
        }*/
        if(flag==0){
        const userObject = {
            userId: this.state.userid,
            userName: this.state.username,
            password: this.state.password,
            email: this.state.email,
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            contactNo: this.state.contactno,
            role: this.state.role,
            isActive: this.state.isactive,
            dob: this.state.dob
        }
        const loginobj = {
            userid: this.state.userid,
            password: this.state.password
        }
        axios.post('http://localhost:8080/users', userObject)
        .then((res) => {
            console.log(res.data)
            alert('Registration Successful')
        })
        
        axios.post('http://localhost:8080/login', loginobj)
        .then((res) => {
            console.log(loginobj)
        })
    }
        
    }


render(){
    return(
        <div class="container1" align="left">
        <form>
            <b>New User Registration:</b>
            <br></br>
            <table>
                <tr>
                    <td>Enter User ID:<input type="number" name="userid" value={this.state.userid} onChange={evt => this.onchangeuserid(evt)}></input></td><br></br>
                    </tr><tr>
                    <td>Enter Username:<input type="text" name="username" value={this.state.username} onChange={evt => this.onchangeusername(evt)}></input></td><br></br>
                    </tr><tr>
                    <td>Enter password:<input type="password" name="password" value={this.state.password} onChange={evt => this.onchangepassword(evt)}></input></td><br></br>
                    </tr><tr>
                    <td>Enter Email-ID:<input type="email" name="email" value={this.state.email} onChange={evt => this.onchangeemail(evt)}></input></td><br></br>
                    </tr><tr>
                    <td>Enter firstname:<input type="text" name="firstname" value={this.state.firstname} onChange={evt => this.onchangefirstname(evt)}></input></td>
                    </tr><tr>
                    <td>Enter lastname:<input type="text" name="lastname" value={this.state.lastname} onChange={evt => this.onchangelastname(evt)}></input></td><br></br>
                    </tr><tr>
                    <td>Enter Contact No.:<input type="number" name="contactno" value={this.state.contactno} onChange={evt => this.onchangecontactno(evt)}></input></td><br></br>
                    </tr><tr>
                    <td>Enter Role:<select value={this.state.role} onChange={evt => this.onchangerole(evt)}><option> </option> <option>Admin</option>  <option>Developer</option> <option>Tester</option></select></td><br></br>
                    </tr><tr>
                    <td>Is Active User:<input type="number" name="isactive" value={this.state.isactive} onChange={evt => this.onchangeisactive(evt)}></input></td><br></br>
                    </tr><tr>
                    <td>Enter Date of Birth:<input type="date" name="dob" value={this.state.dob} onChange={evt => this.onchangedob(evt)}></input></td><br></br>
                    </tr><tr><br />
                    <button type ="submit" onClick={this.onSubmit} class="btn btn-secondary btn-dark">Sign-Up</button>
                </tr>
            </table>
            </form>
            </div>

    )
}
}
export default Home