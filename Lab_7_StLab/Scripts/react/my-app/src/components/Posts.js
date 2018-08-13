import React, { Component } from 'react';
var axios = require('axios');
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import "../resources/css/posts/posts.css"
import InfiniteScroll from 'react-bidirectional-infinite-scroll'


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

        this.handleScrollDown = this.handleScrollDown.bind(this);

        this.handleOnScroll = this.handleOnScroll.bind(this);

        this.handleClick = this.handleClick.bind(this);

        this.goToAlbum = this.goToAlbum.bind(this);
    }

    handleClick(postId){
        debugger;
        this.props.visiblePost(postId);
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

    goToAlbum(idUser){
        debugger;
        this.props.goToAlbuum(idUser);
    }

    callbackFunction(response){
        debugger;
        for (var i = 0; i < response.data.length; i+=4) {
            debugger;
            const obj = {postId:response.data[i], authorName: response.data[i+1], image: [{src: response.data[i + 2], width:1, height:1 }], idUser:response.data[i+3]};
            this.props.changePosts(obj);
        }
        var subPosts = [].concat(this.getItems()).concat(this.getItems());
        this.props.changeSubPosts(subPosts);
    }



    componentDidMount() {
        debugger;
        var context = this;

        let promise = new Promise((resolve,reject )=> {
            axios.post('defineRegistrationUser')
                .then((response) => {
                    debugger;
                    context.props.changeRegistrationUser(response.data);
                });
            axios.post('searchPosts')
                .then((response) => {
                    debugger;
                    context.callbackFunction(response);
                });
        });
    }

    getItems() {
        debugger;
        if(typeof this.props.posts[0] != "undefined") {
            i++;
            debugger;
            if(this.props.isRegistrationUser == false) {
                return (
                    <div className="post_style_mini">
                        <div className="spanMedium_mini"><span>Author name:{this.props.posts[i].authorName}</span></div>
                        <img className="image_style" src="/Scripts/react/my-app/src/zatup.jpg"/>
                        <div className="button_style_mini">
                            <button className="button_style"
                                    onClick={() => this.handleClick(this.props.posts[i].postId)}>Add comment
                            </button>
                        </div>
                        <button className="button_style" onClick={() => this.goToAlbum(this.props.posts[i].idUser)}>To
                            Album
                        </button>

                    </div>
                )
            }
            else{
                return(<div className="post_style">
                    <div className="spanMedium"><span>Author name:{this.props.posts[i].authorName}</span></div>
                    <img className="image_style" src="/Scripts/react/my-app/src/zatup.jpg"/>
                    <div className="button_style_position">
                        <button className="button_style"
                                onClick={() => this.handleClick(this.props.posts[i].postId)}>Add comment
                        </button>
                    </div>
                    <button className="button_style" onClick={() => this.goToAlbum(this.props.posts[i].idUser)}>To
                        Album
                    </button>

                </div>)
            }
        }
        return(
            <div>Loading...</div>
        )
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
        debugger;
        i=-1;
        this.props.returnInInitialState();
    }

    render() {
        debugger;
        if (typeof this.props.posts[0] != "undefined") {
            debugger;
            if(this.props.isRegistrationUser != false) {
                return (
                    <div className="posts_style">
                        <div className="post_scroll">
                            <InfiniteScroll onReachBottom={this.handleScrollDown}
                                            onScroll={this.handleOnScroll}
                                            position={10}>
                                {this.props.subPosts}
                            </InfiniteScroll>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div>
                        <div className="change_location_button"> <button className="button_style_not_authorization_user" onClick={()=>this.props.changeVisibleAuthorization()}>Registration</button></div>
                    <div className="posts_style_mini">
                        <div className="post_scroll_mini">
                            <InfiniteScroll onReachBottom={this.handleScrollDown}
                                            onScroll={this.handleOnScroll}
                                            position={10}>
                                {this.props.subPosts}
                            </InfiniteScroll>
                        </div>
                    </div>
                    </div>
                )
            }
        }
        if(this.props.isRegistrationUser != false) {
            return (
                <div className="load_style">Loading...</div>
            )
        }
        else{
            return (
                <div className="load_style_mini">Loading...</div>
            )
        }
    }
}
