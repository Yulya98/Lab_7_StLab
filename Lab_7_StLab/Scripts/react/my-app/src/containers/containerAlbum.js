import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionAlbum"
import Album from "../components/Albom"


class ContainerAboutYourself extends React.Component{
    constructor(){
        super();

    }

    render(){
        debugger;
        return(
            <div>
                {(this.props.isVisibleAlbum || this.props.flagForCheckAlbumInPosts) && <Album activeAlbumId={this.props.activeAlbumId} flagForCheckPageCommentsOrProfile={this.props.flagForCheckPageCommentsOrProfile} deletePhoto={this.props.deletePhoto} deleteItemFromArray={this.props.deleteItemFromArray} returnInInitialState={this.props.returnInInitialState} activeUserId={this.props.activeUserId} loadImages={this.props.loadImages} deleteItem={this.props.deleteItem} nameImg={this.props.nameImg} path={this.props.path} images={this.props.images} loadData={this.props.componentWillMount} handleClicks={this.props.handleClicks} onChangeDeleteItem={this.props.onChangeDeleteItem} onChangeNameImage={this.props.onChangeNameImage} onChangePath={this.props.onChangePath} deleteButton={this.props.deleteButton}></Album>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerAboutYourself);