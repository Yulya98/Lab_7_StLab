import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionBiggerPhoto"
import BiggerPhoto  from "../components/BigerPhoto"


class ContainerBiggerPhoto extends React.Component{
    render(){
        return(
            <div>
                 <BiggerPhoto srcPhotoBigger={this.props.srcPhotoBigger} changeVisibleBiggerPhoto={this.props.changeVisibleBiggerPhoto}></BiggerPhoto>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerBiggerPhoto);