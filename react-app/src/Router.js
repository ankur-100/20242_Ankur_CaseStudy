import React from 'react';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';

import Login from './Components/Login';
import AddUser from './Components/AddUser';
import App from './App';
import showtask from './Components/showtask';
import notfound from './Components/notfound';
import Createtask from './Components/createtask';
import notfoundadmin from './Components/notfoundadmin';
import modifytask from './Components/modifytask';
import Assigntask from './Components/assigntask';
import setstatus from './Components/setstatus';
import userlanding from './Components/userlanding';
import Search from './Components/search';
import Filter from './Components/task/filter';
import Filterstatus from './Components/task/filterstatus';


const routing =(
    <Router>
        <div align="center">
            <table cellSpacing="30px" cellPadding="30px" >
            <tr ><td>
                <Link to="/" class="btn btn-outline-primary">Home</Link>
            </td>
            <td>
                <Link to="/login" class="btn btn-outline-success">User Login</Link>
            </td>
            <td>
                <Link to="/AddUser" class="btn btn-outline-secondary">New User</Link>
            </td>
            </tr></table>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/AddUser" component={AddUser} />
            <Route path="/showtask" component={showtask} />
            <Route path="/notfound" component={notfound} />
            <Route path ="/createtask" component={Createtask} />
            <Route path="/notfoundadmin" component={notfoundadmin} />
            <Route path="/modifytask" component={modifytask} />
            <Route path="/assigntask" component={Assigntask} />
            <Route path="/setstatus" component={setstatus} />
            <Route path="/userlanding" component={userlanding} />
            <Route path="/search" component={Search} />
            <Route path="/Filter" component={Filter} />
            <Route path="/filterstatus" component={Filterstatus} />
        </Switch>
        </div>
        </Router>

)
export default routing