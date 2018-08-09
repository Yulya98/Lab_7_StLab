import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionPosts"
import Posts from "../components/Posts"
import Album from "../containers/containerAlbum"
import Comments from "../containers/containerComments"


class ContainerPosts extends React.Component{
    constructor(props){
        super(props);
        debugger;
        this.props.visiblePosts();
    }

    render(){
        return(
            <div>
                {this.props.isVisiblePosts && <Posts returnInInitialState={this.props.returnInInitialState} changeCurrentImage={this.props.changeCurrentImage} changeLightboxIsOpen={this.props.changeLightboxIsOpen} changeSubPosts={this.props.changeSubPosts} goToAlbuum={this.props.goToAlbuum} changePosts={this.props.changePosts} changeSubPosts={this.props.changeSubPosts} visiblePost={this.props.visiblePost} posts={this.props.posts} currentImage={this.props.currentImage} subPosts={this.props.subPosts} postId={this.props.postId} ></Posts>}
                {this.props.isVisiblePost && <Comments></Comments>}
                {this.props.isVisibleAlbum && <Album />}
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(ContainerPosts);