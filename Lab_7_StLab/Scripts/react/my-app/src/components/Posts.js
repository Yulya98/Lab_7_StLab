import React, { Component } from 'react';
var axios = require('axios');
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
var ReactDOM = require('react-dom');
import InfiniteScroll from 'react-bidirectional-infinite-scroll'
import Comments from './Comments'
import MyComponent from './Albom'


export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], currentImage: 0, subPosts: [], postId:"" };
        this.handleOnScroll = this.handleOnScroll.bind(this);
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
        if (typeof this.props.posts[0] != "undefined") {
            return (
                <div
                    style={{
                        height: '500px',
                        width: '1230px',
                        WebkitOverflowScrolling: 'touch'
                    }}>
                    <InfiniteScroll onReachBottom={this.props.handleScrollDown()}
                                    onReachTop={this.props.handleScrollUp()}
                                    onScroll={this.handleOnScroll()}
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