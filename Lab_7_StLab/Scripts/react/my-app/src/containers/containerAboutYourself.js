import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionAboutYourself"
import InfoAboutYourself from "../components/AboutYourself"


class ContainerAboutYourself extends React.Component{
    render(){
        return(
            <InfoAboutYourself name={this.props.name} surname={this.props.surname} email={this.props.emailUser} sphere={this.props.sphere} city={this.props.city} loadData={this.props.componentDidMount}></InfoAboutYourself>
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerAboutYourself);