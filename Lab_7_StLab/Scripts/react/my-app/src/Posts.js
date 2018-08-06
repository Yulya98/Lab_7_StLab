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
        this.state = { posts: [], currentImage: 0, subPosts: [], postId:"" };
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

    handleClick(idPost){
        debugger;
        ReactDOM.render(
            <Comments idPost={idPost}/>,
            document.getElementById("app")
        )
    }

    openLightbox(event, obj) {
        debugger;
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
        const subPosts = this.state.subPosts;
        setTimeout(() => { this.setState({ subPosts }) }, 500)
    }

    closeLightbox() {
        debugger;
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious() {
        debugger;
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext() {
        debugger;
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    goToAlbum(idUser){
        ReactDOM.render(
            <MyComponent idActiveUser={idUser}/>,
            document.getElementById("app")
        );
    }

    callbackFunction(response){
        debugger;
        for (var i = 0; i < response.data.length; i+=4) {
            debugger;
            const obj = {postId:response.data[i], authorName: response.data[i+1], image: [{src: response.data[i + 2], width:1, height:1 }], idUser:response.data[i+3]};
            this.setState({
                posts: [...this.state.posts, obj]
            });
        }
        this.setState({
            subPosts: [].concat(this.getItems())
        });
        this.setState({
            subPosts: [].concat(this.getItems()).concat(this.state.subPosts)
        });
    }



    componentWillMount() {
        debugger;
        var context = this;
        axios.post('searchPosts')
            .then((response) => {
                debugger;
                context.callbackFunction(response);
            });
    }

    getItems() {
        debugger;
        if(typeof this.state.posts[0] != "undefined") {
            i++;
            debugger;
            return (
                <div><span>{this.state.posts[i].authorName}</span>
                    <Gallery photos={this.state.posts[i].image} onClick={this.openLightbox}/>
                    <Lightbox images={this.state.posts[i].image}
                              onClose={this.closeLightbox}
                              onClickPrev={this.gotoPrevious}
                              onClickNext={this.gotoNext}
                              currentImage={this.state.currentImage}
                              isOpen={this.state.lightboxIsOpen}
                    /><button onClick={() => this.handleClick(this.state.posts[i].postId)}>Add comment</button>
                    <button onClick={() => this.goToAlbum(this.state.posts[i].idUser)}>To Album</button></div>
            )
        }
        return(
            <div>Loading...</div>
        )
    }

    handleScrollUp() {
        debugger;
        const subPosts = [].concat(this.getItems()).concat(this.state.subPosts)
        setTimeout(() => { this.setState({ subPosts }) }, 500)
    }

    handleScrollDown() {
        debugger;
        const subPosts = this.state.subPosts.concat(this.getItems())
        setTimeout(() => { this.setState({ subPosts }) }, 500)
    }

    handleOnScroll (position, previousPosition) {
        debugger;
        const diffScroll = position - previousPosition
        const direction = diffScroll > 0
            ? 'down'
            : 'up'

        console.log(`Scroll ${direction} to ${position}`)
    }

    render() {
        debugger;
        if (typeof this.state.posts[0] != "undefined") {
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
                        {this.state.subPosts}
                    </InfiniteScroll>
                </div>
            )
        }
        return(
            <div>Loading...</div>
        )
    }
}