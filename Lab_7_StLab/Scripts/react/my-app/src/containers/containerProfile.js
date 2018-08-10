import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionProfile"
import Profile from "../components/Profile"


class ContainerProfile extends React.Component{
    render(){
        return(
            <div>
                {this.props.isVisibleProfile && <Profile ></Profile>}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps,actionCreators)(ContainerProfile);