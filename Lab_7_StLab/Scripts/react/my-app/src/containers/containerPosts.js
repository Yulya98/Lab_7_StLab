import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionPosts.js"
import Posts from "../components/Posts"
import Comments from "../containers/containerComments"
import BiggerPhoto from "../containers/containerBigerPhoto"

class ContainerPosts extends React.Component{
    constructor(props) {
        debugger;
        super(props);
        this.props.returnInInitialStatePages();
        debugger;
    }

    render(){
        debugger;
        return(
            <div>
                {this.props.isVisiblePosts && <Posts changeBiggerPhotoPath={this.props.changeBiggerPhotoPath} isVisiblePosts={this.props.isVisiblePosts} isRegistrationUser={this.props.isRegistrationUser} changeRegistrationUser={this.props.changeRegistrationUser} changeVisibleAuthorization={this.props.changeVisibleAuthorization} returnInInitialState={this.props.returnInInitialState} changeCurrentImage={this.props.changeCurrentImage} changeLightboxIsOpen={this.props.changeLightboxIsOpen} changeSubPosts={this.props.changeSubPosts} goToAlbum={this.props.goToAlbum} changePosts={this.props.changePosts} changeSubPosts={this.props.changeSubPosts} visiblePost={this.props.visiblePost} posts={this.props.posts} currentImage={this.props.currentImage} subPosts={this.props.subPosts} postId={this.props.postId} ></Posts>}
                {this.props.isVisibleBiggerPhoto && <BiggerPhoto />}
                {this.props.isVisiblePost && <Comments></Comments>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerPosts);