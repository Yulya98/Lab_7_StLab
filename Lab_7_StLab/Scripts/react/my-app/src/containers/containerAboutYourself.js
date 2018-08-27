import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionAboutYourself"
import InfoAboutYourself from "../components/AboutYourself"


class ContainerAboutYourself extends React.Component{
    render(){
        return(
            <div>
                {this.props.reducerIsVisibleInformation.isVisibleInformation && <InfoAboutYourself name={this.props.reducerName.name} surname={this.props.reducerSurname.surname} email={this.props.reducerEmailUser.emailUser} sphere={this.props.reducerSphere.sphere} city={this.props.reducerCity.city} loadData={this.props.componentDidMount}></InfoAboutYourself>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerAboutYourself);