import React from 'react';
var axios = require('axios')
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this)
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    componentWillMount() {
        axios.post('searchPosts')
            .then((response) => {
                for (var i = 0; i < response.data.length; i+=2) {
                    var obj = { authorName: response.data[i], image : [{src: response.data[i + 1], width:1, height:1 }]};
                    this.setState({
                        posts: [...this.state.posts, obj]
                    });
                }
            });
        this.state.posts.map(item => console.log(itm.authorName));
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => <div><span>{item.authorName}</span>
                    <Gallery photos={item.image} onClick={this.openLightbox} />
                    <Lightbox images={item.image}
                        onClose={this.closeLightbox}
                        onClickPrev={this.gotoPrevious}
                        onClickNext={this.gotoNext}
                        currentImage={this.state.currentImage}
                        isOpen={this.state.lightboxIsOpen}
                    /> </div>)}
            </div>
         )
    }
}


//import React, { Component } from 'react';
//var axios = require('axios')
//import { render } from 'react-dom';
//import Gallery from 'react-photo-gallery';
//import Lightbox from 'react-images';
//import ReactList from 'react-list';
//import InfiniteScroll from 'react-bidirectional-infinite-scroll'

//var i = 0;

//export default class Posts extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = { posts: [], currentImage: 0, subPosts: [] };
//        this.closeLightbox = this.closeLightbox.bind(this);
//        this.openLightbox = this.openLightbox.bind(this);
//        this.gotoNext = this.gotoNext.bind(this);
//        this.gotoPrevious = this.gotoPrevious.bind(this)
//    }

//    openLightbox(event, obj) {
//        this.setState({
//            currentImage: obj.index,
//            lightboxIsOpen: true,
//        });
//    }

//    closeLightbox() {
//        this.setState({
//            currentImage: 0,
//            lightboxIsOpen: false,
//        });
//    }

//    gotoPrevious() {
//        this.setState({
//            currentImage: this.state.currentImage - 1,
//        });
//    }

//    gotoNext() {
//        this.setState({
//            currentImage: this.state.currentImage + 1,
//        });
//    }

//    componentDidMount() {
//        axios.post('searchPosts')
//            .then((response) => {
//                for (var i = 0; i < response.data.length; i+=2) {
//                    var obj = { authorName: response.data[i], image : [{src: response.data[i + 1], width:1, height:1 }]};
//                    this.setState({
//                        posts: [...this.state.posts, obj]
//                    });
//                }
//            });
//        { this.state.posts.map(item => console.log( item.authorName )); }
//        this.setState({
//            subPosts: [].concat(this.getItems())
//        });
//    }

//    getItems() {
//        i++;
//        return (0)

//            //<div><span>{this.state.posts.authorName}</span>
//            //<Gallery photos={this.state.posts[i].image} onClick={this.openLightbox} />
//            //<Lightbox images={this.state.posts[i].image}
//            //     onClose={this.closeLightbox}
//            //     onClickPrev={this.gotoPrevious}
//            //     onClickNext={this.gotoNext}
//            //     currentImage={this.state.currentImage}
//            //     isOpen={this.state.lightboxIsOpen}
//            //    /> </div>)
//    }

//    handleScrollUp() {
//        const subPosts = [].concat(this.getItems()).concat(this.state.subPosts)
//        setTimeout(() => { this.setState({ subPosts }) }, 500)
//    }

//    handleScrollDown() {
//        const items = this.state.subPosts.concat(this.getItems())
//        setTimeout(() => { this.setState({ subPosts }) }, 500)
//    }

    

//    render() {
//        return (
//            <div>
//                <InfiniteScroll
//                    onReachBottom={this.handleScrollDown}
//                    onReachTop={this.handleScrollUp}
//                    onScroll={this.handleOnScroll}
//                    position={50}>
//                    <div>Achoy</div>
//                </InfiniteScroll>
//            </div>
//        )
//    }
//}
