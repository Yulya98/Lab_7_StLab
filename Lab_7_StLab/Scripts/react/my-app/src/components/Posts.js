import React, { Component } from 'react';
var axios = require('axios');
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
var ReactDOM = require('react-dom');
import InfiniteScroll from 'react-bidirectional-infinite-scroll'
import Comments from './Comments'
import MyComponent from './Albom'



var i = -1;
export default class Posts extends React.Component {
    constructor(props) {
        super(props);

        debugger;

        this.closeLightbox = this.closeLightbox.bind(this);

        this.openLightbox = this.openLightbox.bind(this);

        this.gotoNext = this.gotoNext.bind(this);

        this.gotoPrevious = this.gotoPrevious.bind(this);

        this.callbackFunction = this.callbackFunction.bind(this);

        this.handleScrollUp = this.handleScrollUp.bind(this);

        this.handleScrollDown = this.handleScrollDown.bind(this);

        this.handleOnScroll = this.handleOnScroll.bind(this);

        this.handleClick = this.handleClick.bind(this);

        this.goToAlbum = this.goToAlbum.bind(this);
    }

    handleClick(){
        // debugger;
        // ReactDOM.render(
        //     <Comments idPost={idPost}/>,
        //     document.getElementById("app")
        // )
        this.posts.visiblePost();
    }

    openLightbox(event, obj) {
        debugger;
        var currentImage = obj.index;
        var lightboxIsOpen = true;
        this.posts.changeCurrentImage(currentImage);
        this.props.changeLightboxIsOpen(lightboxIsOpen);
        const subPosts = this.state.subPosts;
        setTimeout(() => { this.props.changeSubPosts(subPosts)}, 500)

    }

    closeLightbox() {
        var currentImage = 0;
        var lightboxIsOpen = false;
        this.posts.changeCurrentImage(currentImage);
        this.props.changeLightboxIsOpen(lightboxIsOpen);
    }

    gotoPrevious() {
        var currentImage = this.props.currentImage - 1;
        this.props.changeCurrentImage(currentImage);
    }

    gotoNext() {
        var currentImage = this.props.currentImage + 1;
        this.props.changeCurrentImage(currentImage);
    }

    goToAlbum(){
        this.props.goToAlbuum();
    }

    callbackFunction(response){
        debugger;
        for (var i = 0; i < response.data.length; i+=4) {
            debugger;
            const obj = {postId:response.data[i], authorName: response.data[i+1], image: [{src: response.data[i + 2], width:1, height:1 }], idUser:response.data[i+3]};
            this.props.changePosts(obj);
        }
        var subPosts = [].concat(this.getItems());
        this.props.changeSubPosts(subPosts);
    }



    componentDidMount() {
        debugger;
        var context = this;
        axios.post('searchPosts')
            .then((response) => {
                context.callbackFunction(response);
            });
    }

    getItems() {
        debugger;
        if(typeof this.props.posts[0] != "undefined") {
            i++;
            debugger;
            return (
                <div><span>{this.props.posts[i].authorName}</span>
                    <Gallery photos={this.props.posts[i].image} onClick={this.openLightbox}/>
                    <Lightbox images={this.props.posts[i].image}
                              onClose={this.closeLightbox}
                              onClickPrev={this.gotoPrevious}
                              onClickNext={this.gotoNext}
                              currentImage={this.props.currentImage}
                              isOpen={this.props.lightboxIsOpen}
                    /><button onClick={() => this.handleClick(this.props.posts[i].postId)}>Add comment</button>
                    <button onClick={() => this.goToAlbum(this.props.posts[i].idUser)}>To Album</button></div>
            )
        }
        return(
            <div>Loading...</div>
        )
    }

    handleScrollUp() {
        debugger;
        const subPosts = [].concat(this.getItems()).concat(this.props.subPosts)
        setTimeout(() => { this.props.changeSubPosts(subPosts)}, 500)
    }

    handleScrollDown() {
        debugger;
        const subPosts = this.props.subPosts.concat(this.getItems())
        setTimeout(() => { this.props.changeSubPosts(subPosts)}, 500)
    }

    handleOnScroll (position, previousPosition) {
        debugger;
        const diffScroll = position - previousPosition
        const direction = diffScroll > 0
            ? 'down'
            : 'up'

        console.log(`Scroll ${direction} to ${position}`)
    }

    componentWillUnmount(){
        this.props.returnInInitialState();
    }

    render() {
        debugger;
        if (typeof this.props.posts[0] != "undefined") {
            return (
                <div
                    style={{
                        height: '500px',
                        width: '1230px',
                        WebkitOverflowScrolling: 'touch'
                    }}>
                    <InfiniteScroll onReachBottom={this.handleScrollDown}
                                    onReachTop={this.handleScrollUp}
                                    onScroll={this.handleOnScroll}
                                    position={50}>
                        {this.props.subPosts}
                    </InfiniteScroll>
                </div>
            )
        }
        return(
            <div>Loading...</div>
        )
    }
}
