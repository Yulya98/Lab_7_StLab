import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionComments"
import Comments from "../components/Comments"


class containerComments extends React.Component{
    render(){
        return(
            <div>
                <Comments returnInInitialState={this.props.returnInInitialState} goToAlbum={this.props.goToAlbums} componentDidMount={this.props.componentDidMount} idPost={this.props.idPost} addComment={this.props.addComment} comment={this.props.comment} activeUserId={this.props.activeUserId} author={this.props.author} closeLightbox={this.props.closeLightbox} gotoPrevious={this.props.gotoPrevious} gotoNext={this.props.gotoNext} currentImage={this.props.currentImage} lightboxIsOpen={this.props.lightboxIsOpen} data={this.props.data} comment={this.props.comment} onChange={this.props.onChange} addComment={this.props.addComment}></Comments>
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(containerComments);