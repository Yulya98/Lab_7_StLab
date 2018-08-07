import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionPosts"
import Posts from "../components/Posts"
import Album from "../containers/containerAlbum"


class ContainerPosts extends React.Component{
    render(){
        return(
            <Posts posts={this.props.posts} currentImage={this.props.currentImage} subPosts={this.props.subPosts} postId={this.props.postId}  goToAlbum={this.props.goToAlbum} handleClick={this.props.handleClick} closeLightbox={thi.props.closeLightbox} gotoPrevious={this.props.gotoPrevious} gotoNext={this.props.gotoNext} openLightbox={this.props.openLightbox} componentWillMount={this.props.componentWillMount} handleScrollUp={this.props.handleScrollUp} handleScrollDown={this.props.handleScrollDown}></Posts>,
            <Album  deleteItem={this.props.deleteItem} nameImg={this.props.nameImg} path={this.props.path} images={this.props.images} loadData={this.props.componentWillMount} handleClick={this.props.handleClick} onChangeDeleteItem={this.props.onChangeDeleteItem} onChangeNameImage={this.props.onChangeNameImage} onChangePath={this.props.onChangePath} deleteButton={this.props.deleteButton}></Album>
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerPosts);