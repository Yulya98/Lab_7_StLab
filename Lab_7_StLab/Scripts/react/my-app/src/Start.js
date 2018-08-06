﻿// var React = require('react')
// var ReactDOM = require('react-dom')
// var axios = require('axios')
// import App from "./Profile.js"
// import RegistrtionForm from "./App.js"
//
// class UserForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { email: "", password: "" };
//
//         this.onChange = this.onChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     onChange(e) {
//         this.setState({ [e.target.name]: e.target.value });
//     }
//
//     handleSubmit(e) {
//         e.preventDefault();
//         var obj = {};
//         obj.Email = this.state.email;
//         debugger;
//         obj.Password = this.state.password;
//         axios.post('registrationform', obj)
//             .then(function (response) {
//                 if (response.data == true)
//                     ReactDOM.render(
//                         <App />,
//                         document.getElementById("app")
//                     );
//                 else
//                     alert('Net takogo usera');
//             });
//     }
//
//     handleClick(){
//         ReactDOM.render(
//             <RegistrtionForm />,
//             document.getElementById("app")
//         )
//     }
//
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <p>
//                     <label>E-mail:</label><br />
//                     <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
//                 </p>
//                 <p>
//                     <label>Password:</label><br />
//                     <input type="password" name="password" value={this.state.password} onChange={this.onChange} />
//                 </p>
//                 <input type="submit" value="Sign In" />
//                 <button onClick={this.handleClick}>Registration Form</button>
//             </form>
//         );
//     }
// }
//
//
// ReactDOM.render(
//     <UserForm />,
//     document.getElementById("app")
// )

import * as actionCreators from "./actions/index.js"

var React = require('react')
import {connect} from "react-redux";

class UserForm extends React.Component {

    render() {
        return (
            <div>
                <p>
                    <label>E-mail:</label><br />
                    <input type="text" name="email" value={this.props.email} onChange={this.props.onChangeEmail} />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="password" name="password" value={this.props.password} onChange={this.props.onChangePassword} />
                </p>
                <button onClick={this.props.loadColor(this.props.email,this.props.password)}></button>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(UserForm);