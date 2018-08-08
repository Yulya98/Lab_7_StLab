import React from 'react';
import {connect} from "react-redux";
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

export default connect (mapStateToProps)(ContainerProfile);