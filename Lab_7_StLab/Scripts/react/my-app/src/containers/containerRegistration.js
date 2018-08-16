import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionRegistration"
import Registration from "../components/Registration"


class ContainerRegistration extends React.Component{
    render(){
        return(
            <div>
                {this.props.isVisibleRegistration && <Registration password={this.props.registrationPassword} visibleProfile={this.props.visibleProfile} name={this.props.name} surname={this.props.surname} email={this.props.registrationEmail} sphere={this.props.sphere} city={this.props.city} pseoudonym={this.props.pseoudonym} isVisibleRegistration={this.props.isVisibleRegistration} onChangeName={this.props.onChangeName} onChangeSurname={this.props.onChangeSurname} onChangepPseoudonym={this.props.onChangepPseoudonym} onChangepEmail={this.props.onChangepEmail} onChangepSphere={this.props.onChangepSphere} onChangepCity={this.props.onChangepCity} onChangepPassword={this.props.onChangepPassword}></Registration>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerRegistration);