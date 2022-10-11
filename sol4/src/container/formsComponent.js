// import React from 'react';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
// import {PostShow} from "./../actions/index"
// class Form extends React.Component {
//     constructor(){
//         super();
//         this.state={
//             name:"",
//             phone:"",
//             email:"",
//             subject:""
//         }
//     }
//     handlename=(e)=>{
//         this.setState({...this.state,name:e.target.value})
//     }
//     handlephone=(e)=>{
//         this.setState({...this.state,phone:e.target.value})
//     }
//     handleemail=(e)=>{
//         this.setState({...this.state,email:e.target.value})
//     }
//     handlesubject=(e)=>{
//         this.setState({...this.state,subject:e.target.value})
//     }
//     handlesubmit=(e)=>{
//         this.props.PostShow(this.state.name,this.state.phone,this.state.email,this.state.subject)
//     }
// render() {
//     return(
//         <div>
//             <form>
//                 <input onChange={this.handlename} value={this.state.name} type="text"/>
//                 <input onChange={this.handlephone} value={this.state.phone} type="text"/>
//                 <input onChange={this.handleemail} value={this.state.email} type="text"/>
//                 <input onChange={this.handlesubject} value={this.state.subject} type="text"/>
//                 <button type="submit" onClick={this.handlesubmit} ></button>
//             </form>
//         </div>
//     )
// }
// }
// const mapDispatchToProps=(dispatch)=>{
//     return bindActionCreators({PostShow},dispatch)
// }
// export default connect(null,mapDispatchToProps)(Form);
import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PostDate } from '../actions';

class FormContainer extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            phone:'',
            email:'',
            subject:''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangPhone = this.handleChangPhone.bind(this);
        this.handleChangEmail = this.handleChangEmail.bind(this);
        this.handleChangSubject = this.handleChangSubject.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event){
        this.setState({name:event.target.value})
    }

    handleChangPhone(event){
        this.setState({phone:event.target.value});
    }
    handleChangEmail(event){
        this.setState({email:event.target.value});
    }
    handleChangSubject(event){
        this.setState({subject:event.target.value});
    }

    handleSubmit(event){
        this.props.PostDate(
            this.state.name,
            this.state.phone,
            this.state.email,
            this.state.subject
        );
        alert('Submitted')
    }

    
    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChangeName}
                            id="name"/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.handleChangPhone}
                            id="phone"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChangEmail}
                            id="title"/>
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.subject}
                            onChange={this.handleChangSubject}
                            id="title"/>
                    </div>
                    <button type="submit" className="btn btn-success"
                    onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({PostDate},dispatch)
}


export default connect(null,mapDispatchToProps)(FormContainer);