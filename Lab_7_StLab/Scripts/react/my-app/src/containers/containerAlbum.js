import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionAlbum"
import Album from "../components/Albom"


class ContainerAboutYourself extends React.Component{
    render(){
        return(
            <Album deleteItem={this.props.deleteItem} nameImg={this.props.nameImg} path={this.props.path} images={this.props.images} loadData={this.props.componentWillMount} handleClick={this.props.handleClick} onChangeDeleteItem={this.props.onChangeDeleteItem} onChangeNameImage={this.props.onChangeNameImage} onChangePath={this.props.onChangePath} deleteButton={this.props.deleteButton}></Album>
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerAboutYourself);