// import React from 'react';
// import {BrowserRouter,Link,Route} from "react-router-dom";
// import List from "./../container/listView";
// import Form from './../container/formsComponent';
// class Routing extends React.Component {
// render(){
//     return(
//         <div>
//             <BrowserRouter>
//         <header>
//          <Link to="/">Home</Link>
//          <Link to="/enquires">Enquires</Link>
//         </header>
//         <Route exact path="/" component={List}/>
//         <Route exact path="/enquires" component={Form}/>
//         <footer>&copy; Edureka Company</footer>
//         </BrowserRouter>
//         </div>
//     )
// }
// }
// export default Routing


import React, {  Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom';

import ListView from '../container/listView';
import FormContainer from '../container/formsComponent';


class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand">edureka!</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/enquiries'>Enquiries</Link>
                            </li>
                        </ul>
                        
                        </div>
                    </div>
                    </nav>
                </header>
                <Route exact path="/" component={ListView}></Route>
                <Route exact path="/enquiries" component={FormContainer}></Route>
            </div>
            </BrowserRouter>
        )
    }
}

export default Routing;