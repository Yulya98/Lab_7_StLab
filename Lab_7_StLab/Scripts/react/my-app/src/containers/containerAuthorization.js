import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionAthorization.js"
import Authorization from "../components/Authorization"


class ContainerAuthorization extends React.Component{
    render(){
        debugger;
        return(
            <div>
                {this.props.reducerIsVisibleAuthorization.isVisibleAuthorization && <Authorization redirectToReferrer={this.props.reducerRedirectReferrer.redirectToReferrer} onChangeRedirectToReferrer={this.props.onChangeRedirectToReferrer} changeRgistrationUser={this.props.changeRgistrationUser} visibleProfile={this.props.changeVisibleRegistrations} email={this.props.reducerEmail.email} password={this.props.reducerPassword.password} handleSubmit={this.props.handleSubmit} changeEmail={this.props.onChangeEmail} changePassword={this.props.onChangePassword}></Authorization>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerAuthorization);