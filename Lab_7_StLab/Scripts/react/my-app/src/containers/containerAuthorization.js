import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionAthorization.js"
import Authorization from "../components/Authorization"


class ContainerAuthorization extends React.Component{
    render(){
        console.log(this.props.isVisibleAuthorization );
        return(
            <div>
                {this.props.isVisibleAuthorization && <Authorization email={this.props.email} password={this.props.password} handleSubmit={this.props.handleSubmit} changeEmail={this.props.onChangeEmail} changePassword={this.props.onChangePassword}></Authorization>}
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerAuthorization);